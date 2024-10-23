// Product and Categories model
const { DataTypes } = require('sequelize');
const connectMySQL = require('../database/connectMySql');


const Product = connectMySQL.define('Product',{
    id:{type:DataTypes.INTEGER ,primaryKey:true },
    title:{type:DataTypes.STRING(255)},
    price :{type:DataTypes.DECIMAL(9,3)},
    description:{type:DataTypes.TEXT },
    stock:{type:DataTypes.INTEGER} ,
    category_id:{type:DataTypes.INTEGER},
    avatar:{type:DataTypes.STRING(255)},
    priceSale :{type:DataTypes.DECIMAL(9,3)},
    name :{type:DataTypes.STRING(255)},
},{ tableName: 'products',
    timestamps: false});

const Category = connectMySQL.define('Category', {
        category_ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_name: {
            type: DataTypes.STRING(255)
        },
    }, {
        tableName: 'category',
        timestamps: false
    });

// Define relationships
Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });

module.exports = {Product ,Category}