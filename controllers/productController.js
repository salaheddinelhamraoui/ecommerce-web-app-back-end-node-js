const Product = require('../models/product');

const fs = require('fs');

const formidable = require('formidable');

exports.createProduct = (req, res) => {

    let form = new formidable.IncomingForm();

    form.keepExtentions = true;

    form.parse(req, (err, fields, files) => {

        if (err) {
            return res.status(400).json({
                error: 'Image could not uploaded !'
            })
        }

        let product = new Product(fields);


        if (files.photo) {

            product.photo.data = fs.readFileSync(files.photo.filepath)
            product.photo.contentType = files.photo.mimetype
        }




        product.save((err, product) => {
            if (err) {
                return res.status(400).json({
                    err: 'Product not persist '
                })
            }

            res.json({
                product
            })
        })



    })


}