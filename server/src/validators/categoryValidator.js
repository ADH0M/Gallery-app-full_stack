const { param, check } = require("express-validator");
const validationMiddleware = require("../middleware/validationMiddleware");

exports.getCategoryValidator = [
  param("id").notEmpty().withMessage("Invalid category id format "),
  validationMiddleware,
];

exports.createCategoryValidator = [
  check("categroyName")
    .notEmpty()
    .withMessage("Category required")
    .isLength({ min: 3 })
    .withMessage("Too short category name")
    .isLength({ max: 32 })
    .withMessage("Too long category name"),
  validationMiddleware,
];
