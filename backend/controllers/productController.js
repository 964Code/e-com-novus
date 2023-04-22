//? Description: Controller for product routes. 
// The controller is used to handle the requests and send the response back. 
//? Controllers are used to separate the logic from the routes and make the code more readable and maintainable.

const asyncHandler = require('express-async-handler');

const Product = require('../models/productModel');

// @desc   Get all products
// @route  GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();

    res.status(200).json(products);
});

// @desc   CREATE a product
// @route  POST /api/products
// @access Public
const createProduct = asyncHandler(async (req, res) => {
    if (!req.body.title || !req.body.description || !req.body.price || !req.body.image || !req.body.category) {
        res.status(400);
        throw new Error(`Please provide all the required fields. Title, description, price, image and category are required.`);
    }

    const product = await Product.create(req.body);

    res.status(200).json(product);
});

// @desc   UPDATE a product
// @route  PUT /api/products/:id
// @access Public
const updateProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(404);
        throw new Error(`Product with ID: ${req.params.id} not found.`);
    }

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });


    res.status(200).json(updatedProduct);
});

// @desc   DELETE a product
// @route  DELETE /api/products/:id
// @access Public
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        res.status(404);
        throw new Error(`Product with ID: ${req.params.id} not found.`);
    }

    await product.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: `Deleted product with ID: ${req.params.id}` });
});



module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};