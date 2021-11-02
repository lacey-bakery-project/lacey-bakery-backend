const router = require('express').Router()
const Product = require('./productModel')
const md = require('./productMiddleware')

router.get('/', (req, res, next) => [
    Product.findAll()
        .then(products => {
            res.status(200).json(products)
        })
        .catch(next)
])

router.post('/', md.checkProductNameUnique, md.checkProductPayload, (req, res, next) => {
    Product.add(req.body)
        .then(newProduct => {
            res.status(201).json(newProduct)
        })
        .catch(next)
})

router.put('/:product_id', md.checkProductIdExists, md.checkProductPayload, (req, res, next) => {
    const { product_id } = req.params
    const product = req.body
    Product.update(product_id, product)
        .then(product => {
            res.status(200).json(product)
        })
        .catch(next)

})

router.delete('/:product_id', md.checkProductIdExists, (req, res, next) => {
    const { product_id } = req.params
    Product.remove(product_id)
        .then(() => {
            res.status(200).json({
                message: `product with ID ${product_id} has been removed from the database`
            })
        })
        .catch(next)
})

router.put('/:product_id/inventory', md.checkProductIdExists, (req, res, next) => {
    const { product_id } = req.params
    const { amount } = req.body
    Product.updateInventory(product_id, amount)
        .then(updatedProduct => {
            res.status(200).json(updatedProduct)
        })
        .catch(next)
})

module.exports = router
