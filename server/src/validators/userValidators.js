const { check, query, param } = require("express-validator");
const validationMiddleware = require("../middleware/validationMiddleware");
const slugify = require("slugify");
const User = require("../model/userModel");

exports.userLoginValidator = [
  query("birthdate").isISO8601().withMessage("Invalid date format"),
  param("gender").notEmpty().withMessage("param id is require ."),
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
    .withMessage("Invalid email address")
    .custom((val) =>
      User.findOne({ where: { email: val } }).then((user) => {
        if (user) {
          return Promise.reject(new Error("E-mail already in user"));
        }
      })
    ),
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

  check("phones")
    .notEmpty()
    .isArray()
    .withMessage("phones must be more one phone.")
    .isMobilePhone(["ar-EG", "ar-SA"])
    .withMessage("Invalid phone number only accepted Egy and SA Phone numbers"),

  check("profileImg").optional(),

  check("role")
    .optional()
    .custom((val) => {
      if (val === "admin" || val === "cunsumer") {
        return true;
      }
      throw new Error("the role must be admin or cunsumer .");
    }),
  check("gender").notEmpty().withMessage("gender is required"),
  validationMiddleware,
];

exports.searchUserName = [
  check("name")
    .optional()
    .isLength({ min: 3 })
    .withMessage("too short ,the name must be 3."),
    
  check("email")
    .notEmpty()
    .withMessage("email is require")
    .isEmail()
    .withMessage("too short ,the email must be yourname@email.co"),
    validationMiddleware
];

exports.updateUserValidator = [
    query("birthdate").isISO8601().withMessage("Invalid date format"),
    param("gender").notEmpty().withMessage("param id is require ."),
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
      .withMessage("Invalid email address")
      .custom((val) =>
        User.findOne({ where: { email: val } }).then((user) => {
          if (user) {
            return Promise.reject(new Error("E-mail already in user"));
          }
        })
      ),
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
  
    check("phones")
      .notEmpty()
      .isArray()
      .withMessage("phones must be more one phone.")
      .isMobilePhone(["ar-EG", "ar-SA"])
      .withMessage("Invalid phone number only accepted Egy and SA Phone numbers"),
  
    check("profileImg").optional(),
  
    check("role")
      .optional()
      .custom((val) => {
        if (val === "admin" || val === "cunsumer") {
          return true;
        }
        throw new Error("the role must be admin or cunsumer .");
      }),
    check("gender").notEmpty().withMessage("gender is required"),
    validationMiddleware,
  ];
  
