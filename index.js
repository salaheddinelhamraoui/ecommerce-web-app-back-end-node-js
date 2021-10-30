
//import express js
const express = require('express');


//import Mongo DB
const mongoose = require('mongoose');

//import routes
const userRoutes = require('./routes/users');

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

//Middleware
app.use(express.json())

//Routes Middleware
app.use('/api/users', userRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})