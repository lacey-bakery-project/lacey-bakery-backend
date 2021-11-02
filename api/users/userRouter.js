const router = require('express').Router()
const User = require('./userModel')
const md = require('./userMiddleware')

router.get('/', (req, res, next) => {
    console.log('test')
})

module.exports = router
