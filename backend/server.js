//? Description: This file is the entry point for the backend server
//? Importing the required modules: express: for creating the server, dotenv: for loading the environment variables
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;


// app is the express server
const app = express();

// Tells express that when we use routes, we use /api/products as the base route and then depending on the request, if it is a get, post, put, delete, it will match the route and execute the callback function that are handled in the productController.js.

app.use('/api/products', require('./routes/productRoutes'));

//Listens on the port specified in the environment variable PORT or 5000. Callback function is executed when the server starts listening. 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

