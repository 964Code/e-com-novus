//? Description: Controller for product routes. 
// The controller is used to handle the requests and send the response back. 
//? Controllers are used to separate the logic from the routes and make the code more readable and maintainable.


// @desc   Get all products
// @route  GET /api/products
// @access Public
const getProducts = async (req, res) => {
    res.status(200).json({ message: 'Get products' });
}

// @desc   CREATE a product
// @route  POST /api/products
// @access Public
const createProduct = async (req, res) => {
    res.status(200).json({ message: 'Created product' });
}

// @desc   UPDATE a product
// @route  PUT /api/products/:id
// @access Public
const updateProduct = async (req, res) => {
    res.status(200).json({ message: `Updated product with ID: ${req.params.id}` });
}

// @desc   DELETE a product
// @route  DELETE /api/products/:id
// @access Public
const deleteProduct = async (req, res) => {
    res.status(200).json({ message: `Deleted product with ID: ${req.params.id}` });
}



module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};