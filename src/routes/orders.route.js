const express = require('express');
const router = express.Router();
const order = require('../controllers/orders.controller');

router.post('/Orders', order.create);
router.get('/Orders', order.read);
router.get('/Orders/:id', order.readOne);



module.exports = router;