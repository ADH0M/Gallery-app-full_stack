require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.jwtSign =(key)=> jwt.sign( key , process.env.JWT_SCERET_KEY ,{expiresIn:process.env.JWT_EXP });
exports.vrifyJwt=(key)=> jwt.verify(key , process.env.JWT_SCERET_KEY)

