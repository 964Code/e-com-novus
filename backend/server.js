const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
const cors = require('cors')

// CORS middleware, issues with connecting from frontend to backend. This is the fix, don't ask me how it works.
const allowedOrigins = ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5000'];

const corsOptions = {
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true)

        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}



connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));


// API routes use the routes. 
app.use('/api/products', require('./routes/productRoutes'));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

