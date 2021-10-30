const express = require('express');
const router = express.Router();
const { test, signup } = require('../controllers/userController')


// home route
router.get('/', test)

// signup route
router.post('/signup', signup)

module.exports = router;