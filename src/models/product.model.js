const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    categoriesArray: [{
        type: String
    }],
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
})

module.exports = mongoose.model('Produit', productSchema);