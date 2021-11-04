const db = require('../../data/db-config')

function findAll() {
    return db('categories')
}

module.exports = {
    findAll
}
