const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('db connected'))
    .catch((err) => console.log(`not connect to the database : ${err.message} `)
    )


app.get('/', (req, res) => {
    res.send({ message: "Hello from NodeJS And Express" })

})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app is running on port ${port}`);
})