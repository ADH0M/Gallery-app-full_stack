const {Router} = require('express');
const { searchUserName , userLoginValidator } = require('../../validators/userValidators');
const { getOneUser , upload , resizeImage , createUser } = require('../../services/userSerivces');
const route = Router();






route.get('/'  , searchUserName , getOneUser);

route.post('/image' , upload.single('profileImg') , resizeImage , (req,res,next)=>{
    res.json({
        image :req.body.profileImg,
        data:'image upload succesful'
    })
});

route.post( '/create/:gender' , upload.single('profileImg') , resizeImage , userLoginValidator , createUser );

route.get( '/:gender'  , userLoginValidator , createUser );


module.exports = route