
//import express js
const express = require('express');

//import Mongo DB
const mongoose = require('mongoose');

//import cors plugin
const cors = require('cors');

//import cookies lib
const cookieParser = require('cookie-parser');

// Import Express Validator
const expressValidator = require('express-validator')

//import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/products');

//Config App
const app = express();
require('dotenv').config();




// DB connect
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('db connected'))
    .catch((err) => console.log(`not connect to the database : ${err.message} `))

//Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(expressValidator());


//Routes Middleware
app.use('/api', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})