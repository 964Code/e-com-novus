// Description: This file contains all the routes for the products. Routes are defined using the express router.
// The router is then exported and used in the server.js file to add the routes to the express server.

const express = require('express');
const router = express.Router();
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

// If request is a get, post, put, delete, it will match the route and execute the callback function that is defined in the controller.
router.route('/').get(getProducts).post(createProduct);
router.route('/:id').put(updateProduct).delete(deleteProduct);

//! The code below is the same as the code above. The code above is just a shorter way of writing the same thing.
/* router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct); */


module.exports = router;


//get and post requests are handled by the router. in the server.js we tell express to use the router for the /api/products route and then the router handles the requests for the /api/products route by matching the request method and the route.

// OLD CODE
/* router.get('/', (req, res) => {
    res.status(200).json({ message: 'Get products' });
});

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Create product' });
});

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Updated product ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Deleted product ${req.params.id}` });
}); */

