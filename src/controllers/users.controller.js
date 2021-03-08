const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

exports.create = async (req, res) => {

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword
        });
        user.save()
        .then((data) => {
            let userToken = jwt.sign({
                id: data._id,
                name: data.firstName
    
            },
                process.env.SECRET_JWT,
                {
                    expiresIn: 86400
                }
            )
            res.send({
                token: userToken,
                auth: true
            })
        })
        .catch((err) => {
            console.log(err.message);    
            res.status(500).send({
                error: 500,
                message: err.message || "some error occured while creating user"
            })
        })

    
}

exports.login = async (req, res) => {
    console.log(req.body)
    User.findOne({
        email: req.body.email,
    })
    .then((data) => {
        if(bcrypt.compareSync(req.body.password, data.password)){
            let userToken = jwt.sign({
                id: data._id,
                name: data.name
            },
                process.env.SECRET_JWT,
                {
                    expiresIn: 86400
                }
            )
            res.send({
                token: userToken,
                auth: true
            })
        } else {
            res.status(500).send({
                error: 500,
                message: "Password is incorrect"
            })
        }
    })
    .catch((err) => {
        console.log(err.message);    
        res.status(500).send({
            error: 500,
            message: "Email is incorrect"
        })
    })

}

exports.readOne = (req, res) => {
    
    User.findById(req.params.id)
    .populate('orders')
    .then((data) => {
        res.send({
            user: data,
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
function getOne(id) {
    return User.findById(id)
    .populate('orders')
}

exports.update = (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            orders: req.body.orders
        }
        )
    .then(() => {
        getOne(req.params.id)
        .then((data) => {
            res.send({
                update: true,
                newUser: data
            })
        })
        .catch((err) => {
            res.status(500).send({
                error: 500,
                message: err.message || "NULL"
            })
        })
    })
    .catch((err) => {
        res.status(500).send({
            error: 500,
            message: err.message || "NULL"
        })
    })
}
        