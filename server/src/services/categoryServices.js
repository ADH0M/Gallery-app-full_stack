const asyncHandler = require("express-async-handler");
const { Category } = require("../model/productModel");
const ApiError = require("../utils/apiError");

exports.getAllCategoris = asyncHandler(async (req, res, next) => {
  try {
    const category = await Category.findAll();
    res.json({
      state: "ok",
      data: category,
      error: null,
    });
  } catch (err) {
    next(new ApiError(err, 400));
  }
});

exports.getOneCategory = asyncHandler(async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findAll({ where: { category_ID: id } });
    res.json({
      state: "ok",
      data: category,
      error: null,
    });
  } catch (err) {
    next(new ApiError(err, 400));
  }
});

exports.updateCategory = asyncHandler(async (req, res, next) => {
    try{
        const {id} = req.params;
        const document = await Category.update({...req.body },{ where:{category_ID:id}})
        if(!document){
            return next(new ApiError ('not found Category'))
        };
        res.json({
            state:'ok',
            message :'updata product succefull .',
            data : [],
            error:null
        });
    }catch(err){
        next(new ApiError(err , 400))
    }
    
});

exports.createCategory = asyncHandler(async (req, res, next) => {
    try{
        const category_name = req.body.categroyName;
        const categroy = await Category.findOne({where:{category_name}});
        if(categroy){
            return next(new ApiError('category exists '))
        }
        const document = await Category.create({category_name});
        res.json({
                state:'ok',
                data:[],
                error :null,
                message:'create new category succefull'
        });

    }catch(err){
        next (new ApiError(err));
    }
});

exports.deleteCategory = asyncHandler(async (req, res, next) => {
    try{
        const {id} = req.params;
        const document = await Category.destroy({ where:{category_ID:id} });
        if(document === 0 ){
            return next(new ApiError ('no Categroy deleted' ,404))
        };
        res.json({
            state:'ok',
            message :'delete Categroy succefull .',
            data : {deleteState:document},
            error:'warnnig'
        });
    }catch(err){
        next(new ApiError(err , 400))
    }
    
});

