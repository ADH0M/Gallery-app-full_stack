const { Router } = require('express');
const { getAllCategoris, getOneCategory, updateCategory, deleteCategory, createCategory } = require('../../services/categoryServices');
const { getCategoryValidator, createCategoryValidator } = require('../../validators/categoryValidator');

const router = Router();



router
    .route('/')
    .get(getAllCategoris )
    .post( createCategoryValidator ,createCategory )

router
    .route('/:id')
    .get(getCategoryValidator,getOneCategory)
    .put(getCategoryValidator,updateCategory)
    .delete(getCategoryValidator,deleteCategory)
    

module.exports = router;
