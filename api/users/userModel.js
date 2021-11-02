const db = require('../../data/db-config')

const findAll = () => {
    return db('users')
        .leftJoin('roles', 'users.role_id', 'roles.role_id')
        .select('users.*', 'roles.role_name')
}

const add = async (user) => {
    await db('users').insert(user)
    return db('users').where('users.username', user.username).first()
}

const findBy = (filter) => {
    return db('users').where(filter)
}

module.exports = {
    findAll,
    add,
    findBy
}
