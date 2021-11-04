const router = require('express').Router()
const Category = require('./categoryModel')

router.get('/', (req, res, next) => {
    Category.findAll()
        .then(categories => {
            res.status(200).json(categories)
        })
        .catch(next)
})

module.exports = router
