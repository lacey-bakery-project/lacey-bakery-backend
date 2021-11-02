const yup = require('yup')

const userSchema = yup.object().shape({
    username: yup
        .string()
        .strict(true)
        .trim()
        .required('username is required'),
    password: yup
        .string()
        .strict(true)
        .trim()
        .required('password is required'),
    role: yup
        .string()
        .strict(true)
})

module.exports = { userSchema }
