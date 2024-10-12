const { param } = require("express-validator");
const validationMiddleware = require("../middleware/validationMiddleware");

exports.getProductValidator = [
    param("id")
      .notEmpty()
      .withMessage("product id is reqiured "),
      validationMiddleware
]