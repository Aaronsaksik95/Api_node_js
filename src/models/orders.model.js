const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ordersSchema = new Schema({
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
    }]
})

module.exports = mongoose.model('Order', ordersSchema);