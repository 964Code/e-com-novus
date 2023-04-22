// Description: This file contains all the routes for the products. Routes are defined using the express router.
// The router is then exported and used in the server.js file to add the routes to the express server.

const express = require('express');
const router = express.Router();


//get and post requests are handled by the router. in the server.js we tell express to use the router for the /api/products route and then the router handles the requests for the /api/products route by matching the request method and the route. 


router.get('/', (req, res) => {
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
});

module.exports = router;