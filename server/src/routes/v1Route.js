const {Router} = require('express');

const userRouter = require('./userRoute/userRoute');
const authRouter = require('./userRoute/authRoute');

const v1Route = Router();




v1Route.use('/user' , userRouter);
v1Route.use('/auth' , authRouter)
  
module.exports =v1Route
