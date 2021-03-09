const Product = require('../models/product.model');

exports.create = (req, res) => {
    const product = new Product({
        price: req.body.price,
        title: req.body.title,
        description: req.body.description,
        image: req.body.image
    });

    product.save()
    .then((data) => {
        res.send({
            product: data,
            created: true
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "some error occured while creating product"
        })
    })

}
exports.read = (req, res) => {
    Product.find()
    .then((data) => {
        res.send({
            product: data,
            created: true
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "some error occured while creating product"
        })
    })

}

exports.readOne = (req, res) => {
    Product.findById(req.params.id)
    .then((data) => {
        res.send({
            product: data,
            response: true
        })
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: err.message || "NULL"
        })
    })

}