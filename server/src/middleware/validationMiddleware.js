const {  validationResult  } = require('express-validator');

const validationMiddleware =( req , res , next ) => {
    const result = validationResult(req) ;   
    if(!result.isEmpty()){
        return res.status(400).json({
            error :result.array()
        }) 
    };
    next();
}
module.exports = validationMiddleware

