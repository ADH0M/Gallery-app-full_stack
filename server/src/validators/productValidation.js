const { param, check } = require("express-validator");
const validationMiddleware = require("../middleware/validationMiddleware");
const { Category } = require("../model/productModel");

exports.getProductValidator = [
    param("id")
      .notEmpty()
      .withMessage("product id is reqiured "),
      validationMiddleware
];


exports.createProductValidator = [
    check('name')
        .isLength({min:3})
        .withMessage('name must be at least 3 chars')
        .notEmpty(),
    check('title')
        .isLength({min:3})
        .withMessage('must be at least 3 chars')
        .notEmpty()
        .withMessage('title is required'),
    check('description')
        .notEmpty()
        .withMessage('Product description is required')
        .isLength({ max: 2000 })
        .withMessage('Too long description'),
    check('stock')
        .notEmpty()
        .withMessage('Product stock is required')
        .isNumeric(),
    check('price')
        .notEmpty()
        .withMessage('Product price is required')
        .isNumeric()
        .withMessage('Product price must be a number')
        .isLength({ max: 10 })
        .withMessage('To long price'),
    check('avatar')
        .optional()
        .isLength({min:3})
        .withMessage('image should be .png or .jpg or .jpeg '),
    check('category_id')
        .notEmpty()
        .withMessage('Product must be belong to a category')
        .custom((id) =>
          Category.findOne({where: {category_ID:parseInt(id)}}).then((category) => {
            if (!category) {
              return Promise.reject(
                new Error(`No category for this id: ${id}`)
              );
            }
          })
        ),
        validationMiddleware

];


exports.updateProductValidator = [
    check('id')
        .notEmpty()
        .withMessage('product id invalid Id.'),
    check('name')
        .optional()
        .isLength({min:3})
        .withMessage('name must be at least 3 chars')
        .notEmpty(),
    check('title')
        .optional()
        .isLength({min:3})
        .withMessage('must be at least 3 chars')
        .notEmpty()
        .withMessage('title is required'),
    check('description')
        .optional()
        .notEmpty()
        .withMessage('Product description is required')
        .isLength({ max: 2000 })
        .withMessage('Too long description'),
    check('stock')
        .optional()
        .notEmpty()
        .withMessage('Product stock is required')
        .isNumeric(),
    check('price')
        .optional()
        .notEmpty()
        .withMessage('Product price is required')
        .isNumeric()
        .withMessage('Product price must be a number')
        .isLength({ max: 10 })
        .withMessage('To long price'),
    check('avatar')
        .optional()
        .isLength({min:3})
        .withMessage('image should be .png or .jpg or .jpeg '),
    check('category_id')
        .optional()
        .notEmpty()
        .withMessage('Product must be belong to a category')
        .custom((id) =>
          Category.findOne({where: {category_ID:parseInt(id)}}).then((category) => {
            if (!category) {
              return Promise.reject(
                new Error(`No category for this id: ${id}`)
              );
            }
          })
        ),
        validationMiddleware
];

exports.deleteProductValidator = [
    check('id')
    .notEmpty()
    .withMessage('product id invalid Id.'),
    validationMiddleware
];
