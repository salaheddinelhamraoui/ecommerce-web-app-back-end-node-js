const express = require('express');

const { userById } = require('../middlewares/user');

const router = express.Router();

const {
    createProduct,
    relatedProducts,
    showProduct,
    productById,
    removeProduct,
    updateProduct,
    allProducts,
    searchProduct,
    photoProduct
} = require('../controllers/productController');

const { requireSignIn, isAuth, isAdmin } = require('../middlewares/auth');

router.get('/photo/:productId', photoProduct);

router.post('/search', searchProduct);

router.get('/', allProducts);

router.post('/:productId', showProduct);

router.get('/related/:productId', relatedProducts);

router.post('/create/:userId', [requireSignIn, isAuth, isAdmin], createProduct);

router.put('/:productId/:userId', [requireSignIn, isAuth, isAdmin], updateProduct);




router.delete('/:productId/:userId', [requireSignIn, isAuth, isAdmin], removeProduct);

router.param('userId', userById);
router.param('productId', productById)

module.exports = router;