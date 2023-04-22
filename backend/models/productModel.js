const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a descrption'],
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price'],
    },
    image: {
        type: String,
        required: [true, 'Please provide a image URL'],
    },
    category: {
        type: String,
        required: [true, 'Please provide a category'],
    },
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)
