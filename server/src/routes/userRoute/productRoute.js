const { Router } = require('express');
const { getAllProducts, getOneProduct, createProdcut, uploadAvatar,resizeProductAvatar } = require('../../services/productsServices');
const { getProductValidator, createProductValidator } = require('../../validators/productValidation');
const express = require('express');
const path = require('path');

const router = Router();

router.use('/images' ,express.static(path.join(__dirname ,'../../upload/productsImg/avatar')))

router
    .get('/', getAllProducts)
    // .post('/createproduct' ,createProductValidator,createProdcut);
    .post('/image' , uploadAvatar.single('avatar') , resizeProductAvatar , createProductValidator ,createProdcut )

router
    .route('/:id')
    .get(getProductValidator,getOneProduct);

module.exports = router;
