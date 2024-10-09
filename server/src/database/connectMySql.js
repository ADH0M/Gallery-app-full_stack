require('dotenv').config();
const { Sequelize } = require('sequelize');
const dotenv   = require('dotenv');  

const connectMySQL = new Sequelize(
    process.env.DATABASE ,process.env.NAME,process.env.PASSWORD,{ 
        host:process.env.HOST,
        dialect:process.env.DIALECT
    }
);


module.exports = connectMySQL
