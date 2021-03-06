const express = require('express');
const router = express.Router();
const category = require('../controllers/category.controller');
const verifyTokenAdmin = require('../middlewares/verifyTokenAdmin');

router.post('/categories', verifyTokenAdmin, category.create);
router.get('/categories', category.read);
router.get('/categories/:title', verifyTokenAdmin, category.readOne);
router.put('/categories/:id', verifyTokenAdmin, category.update);


module.exports = router;