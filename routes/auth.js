const express = require('express');
const { test, signup, signin, signout } = require('../controllers/authController')
const { userSignUpValidator } = require('../middlewares/userValidator')
const { requireSignIn } = require('../middlewares/auth')

const router = express.Router();

// home route
router.get('/', test)

// signup route
router.post('/signup', userSignUpValidator, signup)
router.post('/signin', signin)
router.post('/signout', signout)

router.get("/hello", requireSignIn, (req, res) => {
    res.send('Hello There')
})


module.exports = router;