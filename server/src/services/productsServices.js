const asyncHandler = require('express-async-handler');
const { Product, Category } = require('../model/productModel');
const {Op} =require('sequelize');
const ApiError = require('../utils/apiError');
const { v4: uuidv4 } = require('uuid');
const sharp = require('sharp');
const multer = require('multer');
const path  = require('path')

const storage = multer.memoryStorage();

exports.uploadAvatar  = multer({
    storage ,
    limits : {fieldSize:5 * 1024 * 1024},
    fileFilter: ( req , file , cb ) => {
        const fileType = /jpeg|jpg|png/ ;
        const mimeType = fileType.test(file.mimetype);
        const extName  = fileType.test(path.extname(file.originalname).toLocaleLowerCase());        
        if(mimeType && extName){
            return cb( null , true );
        };
        cb(new ApiError('image extintion must be jpg ,png and jpeg' ,400));
        
    }
});

exports.resizeProductAvatar = asyncHandler( async ( req , res , next ) => {
    if(!req.file){
        const fileName = 'no image'
        req.body.profileImg =fileName
    };
    if(req.file){
        const fileName = `product-avatar-image${Date.now()}-${uuidv4()}.jpeg`
        await sharp(req.file.buffer)
        .resize(1200 , 1200)
        .toFormat('jpeg')
        .jpeg({quality:99})
        .toFile(`src/upload/productsImg/avatar/${fileName}`);
        // .toFile(`src/upload/userProfile`)
        req.body.avatar = fileName;
    }
    next()
})

exports.getAllProducts = asyncHandler ( async (req, res, next) => {
    const { searchCategory, limit, page, minPrice, maxPrice, name } = req.query;
    const limitNum = parseInt(limit) || 12; // Default limit if not provided
    const pageNum = parseInt(page) || 1; // Default to first page if not provided
    const currentOffset = (pageNum - 1) * limitNum;

    try {
        // Build the where condition
        const whereConditions = {
            ...(minPrice && maxPrice && { price: { [Op.between]: [parseFloat(minPrice), parseFloat(maxPrice)] } }),
            ...(name && { name: { [Op.like]: `%${name}%` } }) // Adjust for partial match
        };

        const { count, rows: products } = await Product.findAndCountAll({
            limit: limitNum,
            offset: currentOffset,
            where: whereConditions,
            include: [{
                model: Category,
                where: searchCategory ? { Category_name: { [Op.like]: `%${searchCategory}%` } } : undefined,
                required: searchCategory ? true : false,
            }],
        });

        res.json({
            limit: limitNum,
            offset: currentOffset,
            count,
            products
        });
    } catch (err) {
        next(new ApiError(err)); // Pass the error to the next middleware
    }
});

exports.getOneProduct = asyncHandler ( async(req,res,next)=>{
    try{
        const { id  }= req.params ; 
        const myProduct = await Product.findOne({where:{id:parseInt(id)}})
        if(!myProduct){
            return next(new ApiError(`there is no product has this id :${id}`,404)) 
        }
        res.json({
            state:'ok',
            id , 
            product:myProduct,
            error:null
        });
    }catch(err){
        next(new ApiError(err,404))
    }
})


exports.updateProdcut = asyncHandler(async (req , res , next )=>{
    res.json({update:'update'})
})

exports.createProdcut = asyncHandler(async (req , res , next )=>{
    try{
        const { name , title , description , stock , price , category_id ,avatar} = req.body;
        const product = await Product.create({name ,title , description ,stock , price , category_id ,avatar});
        res.json({
            createProduct:{
                state:'ok',
                data:[],
                toUseImage:'http://localhost:4000/product/images/theAvaterColumn',
                error :null,
                info:'create new user succeful'

        }});

    }catch(err){
        next (new ApiError(err));
    }
})


