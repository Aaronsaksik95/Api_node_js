const Order = require('../models/orders.model');
const User = require('../models/user.model');

exports.create = (req, res) => {
    const order = new Order({
        total: req.body.total,
        user: req.body.user,
        products: req.body.products
    });

    order.save()
        .then((data) => {
            User.findByIdAndUpdate(
                req.body.user,
                {
                    $push: { orders: data._id }
                })
                .then((data) => {
                    res.send({
                        data: data
                    })
                })
                .catch((err) => {
                    res.status(500).send({
                        error: 500,
                        message: err.message
                    })
                })

        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({
                error: 500,
                message: err.message || "some error occured while creating order"
            })
        })

}
exports.read = (req, res) => {
    Order.find()
        .populate('products')
        .populate('user')
        .then((data) => {
            res.send({
                orders: data,
                response: true
            })
        })
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({
                error: 500,
                message: err.message || "some error occured while creating order"
            })
        })

}

exports.readOne = (req, res) => {
    Order.findById(req.params.id)
        .populate('products')
        .then((data) => {
            res.send({
                order: data,
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
    Order.findByIdAndUpdate(req.params.id,
        {
            status: req.body.status
        }
    )
        .then((data) => {
            res.send({
                order: data,
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

exports.delete = (req, res) => {
    Order.findByIdAndDelete(req.params.id)
        .then((data) => {
            User.findByIdAndUpdate(
                req.body.user,
                {
                    $pull: { orders: data._id }
                })
                .then(() => {
                    res.send({
                        delete: true
                    })
                })
                .catch((err) => {
                    res.status(500).send({
                        error: 500,
                        message: err.message
                    })
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