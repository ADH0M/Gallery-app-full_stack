const { Router } = require ('express');
const { authSignUp, upload, resizeUserImage, authLogIn } = require('../../services/authSerivces');
const { signUpValidator, loginValidator } = require('../../validators/authValidators');
const route = Router();

// route.post('/signup' ,upload.single('profileImg') , resizeUserImage , signUpValidator , authSignUp);
route.post('/signup' , signUpValidator , authSignUp);
route.post('/login' , loginValidator , authLogIn );
route.post('/login/rev' , (req,res,next)=>{
    res.json({
        data:{
            name:'ali',
            date:'2024-04-15',
            ndata :req.body.password,
            ndate :req.body.email,

        }
    })
} );

route.post('/test/api' , (req,res,next)=>{
    const {name ,password} = req.body;
    res.json({
        data:{
            ...req.body,
            name
        }
    })
} );


module.exports = route;