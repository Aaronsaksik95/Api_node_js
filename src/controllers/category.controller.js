const Category = require('../models/category.model');

exports.create = (req, res) => {
    const category = new Category({
        title: req.body.title,
    });

    category.save()
        .then((data) => {
            res.send({
                category: data,
                created: true
            })
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({
                error: 500,
                message: err.message || "some error occured while creating category"
            })
        })

}
exports.read = (req, res) => {
    Category.find()
        .then((data) => {
            res.send({
                categories: data,
                response: true
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
    Category.findById(req.params.id)
        .then((data) => {
            res.send({
                category: data,
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

exports.update = (req, res) => {
    Category.findByIdAndUpdate(
        req.params.id,
        {
            title: req.body.title,
        }
    ).then(() => {
        res.send({
            update: true
        })
    })
    .catch((err) => {
        res.status(500).send({
            error: 500,
            message: err.message || "NULL"
        })
    })
}