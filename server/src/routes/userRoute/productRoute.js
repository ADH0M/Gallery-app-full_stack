const { Router } = require('express');
const { getAllProducts, getOneProduct, createProdcut, uploadAvatar,resizeProductAvatar, updateProdcut, deleteProduct } = require('../../services/productsServices');
const { getProductValidator, createProductValidator, updateProductValidator, deleteProductValidator } = require('../../validators/productValidation');
const router = Router();

// router.use('/images' ,express.static(path.join(__dirname ,'../../upload/productsImg/avatar')))

router
    .route('/')
    .get( getAllProducts)
    .post( uploadAvatar.single('avatar') , resizeProductAvatar , createProductValidator ,createProdcut )

router
    .route('/:id')
    .get(getProductValidator,getOneProduct)
    .put(updateProductValidator,updateProdcut)
    .delete(deleteProductValidator,deleteProduct)
    

module.exports = router;
