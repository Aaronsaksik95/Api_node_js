const express = require('express');
const router = express.Router();

const userRouter = require('./users.route');
const productRouter = require('./products.route')
const categoryRouter = require('./category.route')
const orderRouter = require('./orders.route')
const checkoutRouter = require('./checkout.route')


router.use(userRouter);
router.use(productRouter);
router.use(categoryRouter);
router.use(orderRouter);
router.use(checkoutRouter);

module.exports = router;