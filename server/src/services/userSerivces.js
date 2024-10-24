const asyncHandler = require("express-async-handler");
const User = require("../model/userModel");
const ApiError = require("../utils/apiError");
const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { hashPassword, isValidPassword } = require("../helper/hash");
const { vrifyJwt } = require("../helper/jsonWebToken");
const jwt = require("jsonwebtoken");

const storage = multer.memoryStorage();

exports.upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const fileType = /jpeg|jpg|png/;
    const mimeType = fileType.test(file.mimetype);
    const extName = fileType.test(
      path.extname(file.originalname).toLocaleLowerCase()
    );
    console.log(mimeType, extName);

    if (mimeType && extName) {
      return cb(null, true);
    }
    cb(new Error("image extintion must be jpg ,png and jpeg"));
  },
});

exports.resizeImage = asyncHandler(async (req, res, next) => {
  if (req.file) {
    const imageName = `profileImg-${Date.now()}-${uuidv4()}.jpeg`;
    await sharp(req.file.buffer)
      .resize(1200, 1200)
      .toFormat("jpeg")
      .jpeg({ quality: 95 })
      .toFile(`src/upload/userProfile/${imageName}`);
    req.body.profileImg = imageName;
  }
  next();
});

exports.getOneUser = asyncHandler(async (req, res, next) => {
  try {
    const { email } = req.query;
    const token = req.headers.authorization;
    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SCERET_KEY);
    const password = decoded.password;
    const itemName = await User.findOne({ email, password });
    console.log(token);
    console.log(password);
    console.log(email);
    console.log(decoded);
    
    if (!token && decoded) {
      return next(new ApiError("Token not provided", 401)); // Unauthorized
    }

    if (!itemName) {
      return next(new ApiError("not found user", 404));
    }

    if (email !== decoded.email) {
      return next(new ApiError("Invalid email login "));
    }

    res.json({
      state: "ok",
      statusCode: 200,
      data: { ...itemName.toJSON(), password: undefined },
      error: "null",
    });
  } catch (err) {
    return next(new ApiError(err));
  }
});

exports.createUser = asyncHandler(async (req, res, next) => {
  const { email } = req.body;
  const userEmail = await User.findOne({ where: { email: email } });
  if (userEmail) {
    return next(new ApiError("the email allready exist ."));
  }

  const hash = hashPassword(req.body.password);
  const newUser = await User.create({
    ...req.body,
    gender: req.params.gender,
    password: hash,
    birthdate: req.query.birthdate,
  });
  const isvalid = isValidPassword(req.body.password, hash);
  res.status(201).json({
    state: "ok",
    statusCode: 201,
    data: { user: "create new user succesfull." },
    error: "null",
  });
});

exports.updateuser = asyncHandler(async (req, res, next) => {
  const { email, name } = req.body;
  const userUpdate = await User.findOne({ where: { email: email, name } });
  if (!userUpdate) {
    return next(new ApiError("the email allready exist ."));
  }

  const newUser = await User.update({
    ...req.body,
    gender: req.params.gender,
    birthdate: req.query.birthdate,
  });
  res.status.json({
    state: "ok",
    statusCode: 201,
    data: { user: "create new user is succesfull." },
    error: "null",
  });
});
