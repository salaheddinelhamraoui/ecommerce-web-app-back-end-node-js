const express = require('express');

const { userById } = require('../middlewares/user');

const router = express.Router();

const { createProduct, showProduct, productById, removeProduct } = require('../controllers/productController');

const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth');

router.post('/:productId', showProduct)

router.post('/create/:userId', [requireSignIn, isAuth, isAdmin], createProduct);

router.delete('/:productId', [requireSignIn, isAuth, isAdmin], createProduct);

router.param('userId', userById);
router.param('productId', productById)

module.exports = router;