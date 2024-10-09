const connectMysql =require('../model/product');
const {DataTypes} =require('sequelize')
const Product = connectMysql.define('Image',{
    productName:{type:DataTypes.STRING(255) ,allowNull:false },
    filename:{type:DataTypes.STRING(255) ,allowNull:false },
    category:{type:DataTypes.STRING(255) ,allowNull:false },
    image_path:{type:DataTypes.STRING(255) ,allowNull:false },
    quantity:{type:DataTypes.INTEGER ,allowNull:false },
},{timestamps:false});


connectMysql.sync().then(res => console.log('product has been define...'));


module.exports =Product
