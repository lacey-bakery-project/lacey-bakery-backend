const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const userRouter = require('./users/userRouter')
const paymentRouter = require('./payment/paymentRouter')
const productRouter = require('./products/productRouter')


const server = express()
server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/users', userRouter)
server.use('/api/payment', paymentRouter)
server.use('/api/products', productRouter)

server.get('/', (req, res) => {
    res.status(200).json({
        message: "welcome to Lacey Bakery"
    })
})

server.get('*', (req, res, next) => {
    next({
        status: 400,
        message: `The ${req.method} request to ${req.originalUrl} endpoint is not built yet!`
    })
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
})

module.exports = server
