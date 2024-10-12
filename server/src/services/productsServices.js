const asyncHandler = require('express-async-handler');
const { Product, Category } = require('../model/productModel');
const {Op} =require('sequelize');
const ApiError = require('../utils/apiError');

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
} )

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

