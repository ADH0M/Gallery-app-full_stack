const { Router } = require ('express');
const { authSignUp, upload, resizeUserImage, authLogIn } = require('../../services/authSerivces');
const { signUpValidator, loginValidator } = require('../../validators/authValidators');
const route = Router();

// route.post('/signup' ,upload.single('profileImg') , resizeUserImage , signUpValidator , authSignUp);
route.post('/signup' , signUpValidator , authSignUp);
route.post('/login' , loginValidator , authLogIn );



module.exports = route;