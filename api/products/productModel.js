const db = require('../../data/db-config')


function findAll() {
    return db('products as p')
        .leftJoin('categories as c', 'p.category_id', 'c.category_id')
        .select('p.*', 'c.category_name')
        .orderBy(['c.category_id', 'p.product_id'])
}

function findBy(filter) {
    return db('products as p')
        .leftJoin('categories as c', 'p.category_id', 'c.category_id')
        .select('p.*', 'c.category_name')
        .where(filter)
        .orderBy(['c.category_id', 'p.product_id'])
        .first()
}

async function add(product) {
    const product_name = product.product_name
    await db('products').insert(product)
    return findBy({ product_name })
}

async function update(product_id, product) {
    await db('products')
        .where({ product_id })
        .update(product)
    return findBy({ product_id })
}

async function remove(product_id) {
    return db('products')
        .where({ product_id })
        .delete()
}

async function updateInventory(product_id, amount) {
    const product = await findBy({ product_id })
    const adjustedAmount = parseInt(product.product_inventory) + parseInt(amount)
    await db('products')
        .where({ product_id })
        .update({ 'product_inventory': adjustedAmount })
    return findBy({ product_id })
}

// Client
// subtract

module.exports = {
    findAll,
    add,
    findBy,
    update,
    remove,
    updateInventory
}
