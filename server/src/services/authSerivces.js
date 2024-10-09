require('dotenv').config();
const expressAsyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const ApiError = require("../utils/apiError");
const { jwtSign, vrifyJwt } = require("../helper/jsonWebToken");
const { hashPassword, isValidPassword } = require('../helper/hash');
const multer = require('multer');
const {v4:uuidv4} = require('uuid');
const sharp  =require("sharp");
const path = require('path');
const slugify = require('slugify');

const storage = multer.memoryStorage();
exports.upload  = multer({
    storage ,
    limits : {fieldSize:5 * 1024 * 1024},
    fileFilter: ( req , file , cb ) => {
        const fileType = /jpeg|jpg|png/ ;
        const mimeType = fileType.test(file.mimetype);
        const extName  = fileType.test(path.extname(file.originalname).toLocaleLowerCase());
        console.log(mimeType,extName);
        
        if(mimeType && extName){
            return cb( null , true );
        };
        cb(new Error('image extintion must be jpg ,png and jpeg'));
        
    }
});

exports.resizeUserImage = expressAsyncHandler( async ( req , res , next ) => {
    if(!req.file){
        const fileName = 'no image'
        req.body.profileImg =fileName
    };
    if(req.file){
        const fileName = `user-Profile-image${Date.now()}-${uuidv4()}.jpeg`
        await sharp(req.file.buffer)
        .resize(1200 , 1200)
        .toFormat('jpeg')
        .jpeg({quality:99})
        .toFile(`src/upload/userProfile/${fileName}`);
        req.body.profileImg = fileName;
    }
    next()
})

exports.authSignUp = expressAsyncHandler( async ( req , res , next ) => {
    const { email , name , gender , password , birthdate , role ,whatsAppNumber,phone} = req.body ;
    const userEmail = await User.findOne({where:{email:email}});
    if(userEmail){
        return next(new ApiError('the email allready exist .'));
    };
    const hash = hashPassword(password);
    const slug = slugify(name, {
        replacement: '-',  
        remove: undefined, 
        lower: true,       
        strict: true,      
        locale: 'en'       
    });

    await User.create({name , email, gender , password:hash , birthdate , role ,phones:[phone , whatsAppNumber ],slug});

    const token = jwtSign({ email , password });
    res.status(201).json({ 
        status:'ok' ,
        statusCode:201,
        data : { user : 'create new user succesfull.' } ,
        token,
        error:'null',
    });


});

exports.allwoTo =(...role ) =>
    expressAsyncHandler(async ( req , res , next ) => {
    if(!role.includes(req.body.role)){
        next(new ApiError('You are not allowed to access this route' , 403))
    }
    next()
})

exports.protect = expressAsyncHandler( async ( req , res , next ) => {
    const userToken = req.headers.authorization;
    let token ;
    if(userToken && userToken.startsWith('Bearer') ) {
        token =userToken.split(' ')[1]
    };

    if(!token){
        return next( new ApiError('your are  unauthorize ',401))
    };
    const varificaitonToke = vrifyJwt(token);

    const {email , name } = varificaitonToke;
    const user = await User.findOne({where:{ email , name }});

    if(!user){
        return next( new ApiError('your are unauthorize user not exist in the Db login agine .',401))
    };

    const userlatestUpdate = parseInt(user.updatedAt.getTime() /1000 , 10 );
    if(userlatestUpdate > varificaitonToke.iat){
        return next(new ApiError('you update your date please login agine .'))
    };

    let d =userlatestUpdate > varificaitonToke.iat
    req.body.user = user ;
    res.json({ user });
    
});

exports.allwoToManager =(...role) =>
    expressAsyncHandler( async ( req , res , next ) =>{
        if(role !== 'admin' || role !=='manager'){
            next(new ApiError("this only to admin or manger"))
        }
        next()
    })


exports.authLogIn = expressAsyncHandler( async ( req , res , next ) => {
    const {email , password  } = req.body ;
    const hashPass = hashPassword(password);
    const isValidPass = isValidPassword(password , hashPass)
    const user = await User.findOne({where:{email}});
    
    if(!user || !isValidPass ){
        return next(new ApiError('not found your email or password is faileur' , 404 ));
    };
    const token = jwtSign({email:user.email , password:user.password})
    res.json({
        data :{...user.toJSON() , password:undefined ,createdAt:undefined ,updatedAt:undefined },
        token
    })

})