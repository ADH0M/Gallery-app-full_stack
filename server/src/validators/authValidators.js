const { check, query } = require("express-validator");
const validationMiddleware = require("../middleware/validationMiddleware");
const slugify = require("slugify");
const User = require("../model/userModel");

exports.signUpValidator = [
    // query("birthdate").isISO8601().withMessage("Invalid date format"),
    // query("new_user").notEmpty().withMessage("user name is require"),
    check("name")
      .notEmpty()
      .withMessage("User required")
      .isLength({ min: 3 })
      .withMessage("Too short User name")
      .custom((val, { req }) => {
        req.body.slug = slugify(val);
        return true;
      }),
  
    check("email")
      .notEmpty()
      .withMessage("Email required")
      .isEmail()
      .withMessage("Invalid email address"),
    check("password")
      .notEmpty()
      .withMessage("Password required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters")
      .custom((password, { req }) => {
        if (password !== req.body.passwordConfirm) {
          throw new Error("Password Confirmation incorrect");
        }
        return true;
      }),
  
    check("passwordConfirm")
      .notEmpty()
      .withMessage("Password confirmation required"),
  
    check("phone")
      .notEmpty()
      .withMessage("phone is requier.")
      .isMobilePhone(["ar-EG", "ar-SA"])
      .withMessage("Invalid phone number only accepted Egy and SA Phone numbers"),
  
    check("whatsAppNumber")
      .notEmpty()
      .withMessage("whatsup number is require.")
      .isMobilePhone(["ar-EG", "ar-SA"])
      .withMessage("Invalid phone number only accepted Egy and SA Phone numbers"),
  
    check("profileImg").optional(),
  
    check("role")
      .optional()
      .custom((val) => {
        if (val === "manager"||val === "admin" || val === "cunsumer") {
          return true;
        }
        throw new Error("the role must be admin or cunsumer .");
      }),
    check("gender").notEmpty().withMessage("gender is required"),
    validationMiddleware,
  ];

exports.loginValidator  =[
  check('email')
  .notEmpty()
  .withMessage('emial is require')
  .isEmail()
  .withMessage('email must be yourname@gm.cm'),
  
  check('password')
  .notEmpty()
  .withMessage('password is require')
  .isLength({min:5})
  .withMessage('password must be more than 5 charc'),
  validationMiddleware
]