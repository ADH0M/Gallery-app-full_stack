const express = require('express');
const dotenv   = require('dotenv');  
const cors    = require('cors');
const helemt  = require('helmet');
const v1Route = require('./src/routes/v1Route');
const connectMySQL = require('./src/database/connectMySql');
const globalError = require('./src/middleware/errorMiddleware');
const ApiError = require('./src/utils/apiError');
const logger = require('./src/helper/logger');
const port=process.env.PORT||4000 ;
const app = express();


dotenv.config({path:'config.env'});

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helemt());

// Enable other domains to access your application
app.use(cors());
app.options('*', cors());

(async ()=>{    
    try{
        await connectMySQL.sync();
    }catch(err){
        throw new Error(err)
    };

})();


app.use(v1Route);

app.all('*', (req, res, next) => {
    next(new ApiError(`Can't find this route: ${req.originalUrl}`, 400));
  });

// Global error handling middleware for express
app.use(globalError);

app.listen(port,()=>{
    console.log(`the server is running on port :${port}`)
});

(async ()=>{
    try{
        await connectMySQL.authenticate();
        logger.info('connect db succeful.');
    }catch(err){
        logger.error(`db erro${err}`);
        throw new Error(err);
    };
    
});
