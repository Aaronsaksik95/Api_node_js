const express = require('express');
const router = express.Router();
const order = require('../controllers/orders.controller');
const verifyToken = require('../middlewares/verifyToken');


router.post('/orders', order.create);
router.get('/orders', verifyToken, order.read);
router.get('/orders/:id', verifyToken, order.readOne);



module.exports = router;