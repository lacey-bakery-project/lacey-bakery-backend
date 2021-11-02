const db = require('../../data/db-config')
const User = require('./userModel')
const { userSchema } = require('../../validations/userSchema')

async function validatePayload(req, res, next) {
    try {
        let validated = await userSchema.validate(req.body)
        if (validated.role === 'makemesuperman') {
            validated.role_id = 1
            req.body = validated
            next()
        } else {
            validated.role_id = 2
            req.body = validated
            next()
        }
    } catch (err) {
        next({
            status: 400,
            message: err.message
        })
    }
}

async function checkUsernameUnique(req, res, next) {
    const { username } = req.body
    const exist = await User.findBy({ username }).first()
    if (exist) {
        next({
            status: 400,
            message: 'username taken'
        })
    } else {
        next()
    }
}

async function checkUsernameExist(req, res, next) {
    const { username } = req.body
    const exist = await User.findBy({ username }).first()
    if (!exist) {
        next({
            status: 400,
            message: 'username Not Found'
        })
    } else {
        next()
    }
}

function getRole(user_id) {
    return db('users as u')
        .leftJoin('roles as r', 'u.role_id', 'r.role_id')
        .select('r.role_name')
        .where('u.user_id', user_id)
        .first()
}

module.exports = {
    checkUsernameUnique,
    validatePayload,
    checkUsernameExist,
    getRole,
    // checkIfBooked,
    // checkBookingId
}