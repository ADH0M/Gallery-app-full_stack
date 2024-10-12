const { Router } = require('express');
const { Product, Category } = require('../../model/productModel');
const { Op } = require('sequelize');
const { getAllProducts, getOneProduct } = require('../../services/productsServices');
const { getProductValidator } = require('../../validators/productValidation');

const router = Router();

router.get('/', getAllProducts);

router
    .route('/:id')
    .get(getProductValidator,getOneProduct)

module.exports = router;
