const Product = require('../models/product');

const Joi = require('joi');

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

            if (files.photo.size > Math.pow(10, 6)) {
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size !'
                })
            }

            product.photo.data = fs.readFileSync(files.photo.filepath)
            product.photo.contentType = files.photo.mimetype
        }



        const schema = Joi.object({
            name: Joi.string().required(),
            description: Joi.string().required(),
            price: Joi.required(),
            quantity: Joi.required(),
            category: Joi.required()
        })

        const { error } = schema.validate(fields);

        if (error) {
            return res.status(400).json({
                error: error.details[0].message
            })
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

exports.productById = (req, res) => {
    Product.findById(id).exec((err, product) => {

        if (err || !product) {
            return res.status(400).json({
                error: 'Product not found !'
            })
        }

        req.product = product

        next()
    })
}

exports.showProduct = (req, res) => {

    req.product.photo = undefined;

    res.json({
        product: req.product
    })
}

exports.removeProduct = (req, res) => {

    let product = req.product

    product.remove((err, product) => {

        if (err) {
            return res.status(404).json({
                error: "Product not Found !"
            })
        }

        res.status(204).json({})
    })
}