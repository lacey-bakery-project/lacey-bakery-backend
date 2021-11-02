const { productSchema } = require('../../validations/productSchema')
const Product = require('./productModel')

async function checkProductPayload(req, res, next) {
    try {
        const validated = await productSchema.validate(req.body)
        req.body = validated
        next()
    } catch (err) {
        next({
            status: 400,
            message: err.message
        })
    }
}

async function checkProductNameUnique(req, res, next) {
    try {
        const { product_name } = req.body
        const isExist = await Product.findBy({ product_name })
        if (!isExist) {
            next()
        } else {
            next({
                status: 400,
                message: 'Product name is already exist'
            })
        }
    } catch (err) {
        next(err)
    }
}

async function checkProductIdExists(req, res, next) {
    try {
        const { product_id } = req.params
        const exist = await Product.findBy({ product_id })
        if (exist) {
            next()
        } else {
            next({
                status: 404,
                message: `Product ID ${product_id} Not Found!`
            })
        }
    } catch (err) {
        next(err)
    }
}


module.exports = {
    checkProductPayload,
    checkProductNameUnique,
    checkProductIdExists
}

