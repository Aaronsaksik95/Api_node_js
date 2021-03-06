const express = require('express');
const router = express.Router();
const order = require('../controllers/orders.controller');
const verifyTokenAdmin = require('../middlewares/verifyTokenAdmin');


router.post('/orders', order.create);
router.get('/orders', verifyTokenAdmin, order.read);
router.get('/orders/:id', order.readOne);
router.put('/orders/:id', verifyTokenAdmin, order.update);
router.delete('/orders/:id', verifyTokenAdmin, order.delete);



module.exports = router;