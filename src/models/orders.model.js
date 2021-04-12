const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
    status: {
        type: String,
        require: true,
        default: "TO DELIVER"
    },
    total: {
        type: Number
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Produit'
    }],
    date: {
        type: Date,
        require: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('Order', ordersSchema);