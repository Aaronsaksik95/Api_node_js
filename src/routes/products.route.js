const express = require('express');
const router = express.Router();
const product = require('../controllers/products.controlleur');

router.post('/products', product.create);
router.get('/products', product.read);
router.get('/products/:id', product.readOne);



module.exports = router;