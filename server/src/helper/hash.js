require('dotenv').config();
const bcrypt = require('bcrypt');

exports.hashPassword = ( planePassword ) => bcrypt.hashSync( planePassword , Number( process.env.SALTNUMBER ) || 6 ); 
exports.isValidPassword = ( planePassword , password ) => bcrypt.compareSync(planePassword , password) ; 