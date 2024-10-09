const {Sequelize}  = require('sequelize');
const connectMysql = new Sequelize('eshop','root','adham',{
    host:'localhost',
    dialect:'mysql'
});

connectMysql.authenticate()
module.exports = connectMysql
