const {Router} = require('express');

const userRouter = require('./userRoute/userRoute');
const authRouter = require('./userRoute/authRoute');
const productRouter = require('./userRoute/productRoute')
const categoryRouter = require('./userRoute/categoryRoute')

const v1Route = Router();




v1Route.use('/user' , userRouter);
v1Route.use('/auth' , authRouter);
v1Route.use('/product' , productRouter);
v1Route.use('/category' , categoryRouter);


  
module.exports =v1Route
