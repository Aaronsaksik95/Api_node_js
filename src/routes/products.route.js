const express = require('express');
const router = express.Router();
const product = require('../controllers/products.controller');
const verifyTokenAdmin = require('../middlewares/verifyTokenAdmin');

router.post('/products', verifyTokenAdmin, product.create);
router.get('/products', product.read);
router.get('/products/:id', product.readOne);
router.put('/products/:id', verifyTokenAdmin, product.update);
router.delete('/products/:id', verifyTokenAdmin, product.delete);


module.exports = router;