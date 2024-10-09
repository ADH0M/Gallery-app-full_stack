const asyncHandler = require('express-async-handler');

exports.getOne = ( Model ) => {
    return asyncHandler( async( req , res , next ) => {
        const name = req.body.name ;
        const item = await Model.findOne({where:{name:name}});
        
    })
}
