const router = require('express').Router()
const bcrypt = require('bcryptjs')
const User = require('./userModel')
const md = require('./userMiddleware')
const tokenBuilder = require('./tokenBuilder')

router.get('/', (req, res, next) => {
    User.findAll()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(next)
})

router.post('/register', md.validatePayload, md.checkUsernameUnique, (req, res, next) => {
    let user = {
        username: req.body.username,
        password: req.body.password,
        role_id: req.body.role_id
    }

    const rounds = parseInt(process.env.BCRYPT_ROUNDS) || 8

    const hash = bcrypt.hashSync(user.password, rounds)
    user.password = hash

    User.add(user)
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(next)
})

router.post('/login', md.validatePayload, md.checkUsernameExist, async (req, res, next) => {
    try {
        let user = req.body

        const existingUser = await User.findBy({ 'username': user.username }).first()

        if (bcrypt.compareSync(user.password, existingUser.password)) {
            const role = await md.getRole(existingUser.user_id)

            const token = tokenBuilder(existingUser)

            res.status(200).json({
                message: `welcome back, ${existingUser.username}`,
                username: existingUser.username,
                token,
                role_name: role.role_name
            })

        } else {
            next({
                status: 401,
                message: 'invalid password'
            })
        }
    } catch (err) { next(err) }
})


module.exports = router
