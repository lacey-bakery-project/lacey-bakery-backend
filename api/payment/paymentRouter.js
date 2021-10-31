const router = require('express').Router()
// eslint-disable-next-line no-undef
const stripe = require('stripe')(process.env.SECRET_KEY)


router.post('/', async (req, res, next) => {
    try {
        const { amount } = req.body

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd'
        })

        res.status(200).send(paymentIntent.client_secret)

    } catch (err) { next(err) }

})

module.exports = router
