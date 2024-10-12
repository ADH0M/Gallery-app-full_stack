// In model/productModel.js or wherever your models are defined

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('movie', 'root', 'adham', {
    host: 'localhost',
    dialect: 'mysql'
});

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DECIMAL(10, 2)
    },
    category_id: {
        type: DataTypes.INTEGER
    },

}, {tableName:'products',
    timestamps: false
});

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
}, {
    tableName:'category',
    timestamps: false
});

// Define relationships
Product.belongsTo(Category, { foreignKey: 'category_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });

module.exports = { Product, Category };
