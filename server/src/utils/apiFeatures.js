class SequelizeFeatures {
    constructor(model, queryString) {
        this.model = model;
        this.queryString = queryString;
        this.queryOptions = {};
    }

    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 10;
        const offset = (page - 1) * limit;
        this.queryOptions.limit = limit;
        this.queryOptions.offset = offset;
        return this;
    }

    filter() {
        const queryObj = { ...this.queryString };
        const excludeFields = ['page', 'sort', 'limit', 'fields'];
        excludeFields.forEach(el => delete queryObj[el]);

        // Advanced filtering (e.g., greater than, less than)
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        this.queryOptions.where = JSON.parse(queryStr);
        return this;
    }

    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').map(el => [el, 'ASC']);
            this.queryOptions.order = sortBy;
        }
        return this;
    }

    limitFields() {
        if (this.queryString.fields) {
            const fields = this.queryString.fields.split(',').join(' ');
            this.queryOptions.attributes = fields.split(' ');
        }
        return this;
    }

    async execute() {
        return await this.model.findAll(this.queryOptions);
    }
}





// const { Router } = require('express');
// const { Product, Category } = require('../../model/productModel');
// const { Op } = require('sequelize');
// const route = Router();
// route.get('/', async (req, res, next) => {
//     const { search, minPrice, maxPrice } = req.query; // Assuming minPrice and maxPrice are passed as query params
//     const limit = 5;
//     const page = 2;
//     const currentOffset = (page - 1) * limit;

//     try {
//         // Find products based on search criteria and price range
//         const products = await Product.findAll({

//             include: [{
//                 model: Category,
//                 where: search ? { Category_name: { [Op.like]: `%${search}%` } } : undefined,
//                 required: search ? true : false,
//             }]
//         });

//         // If products found, get the category ID
//         if (products.length > 0) {
//             const categoryId = products[0].Category.category_ID; // Assuming Category is a direct association
            
//             // Find all products in the same category
//             const allProductsInCategory = await Product.findAll({
//                 where: { category_ID:categoryId },
//                 include: [Category]
//             });

//             return res.json({
//                 currentOffset,
//                 totalProducts:  allProductsInCategory.length,
//                 products:allProductsInCategory
//             });
//         }

//         // If no products found
//         res.json({
//             currentOffset,
//             totalProducts: 0,
//             products:[]
//         });

//     } catch (err) {
//         console.error('Error occurred:', err);
//         next(err); // Pass the error to the next middleware
//     }
// });

// module.exports = route;



module.exports = SequelizeFeatures;
