const express = require('express');
const { test, signup, signin, signout } = require('../controllers/userController')
const { userSignUpValidator } = require('../middlewares/userValidator')

const router = express.Router();

// home route
router.get('/', test)

// signup route
router.post('/signup', userSignUpValidator, signup)
router.post('/signin', signin)
router.post('/signout', signout)


module.exports = router;