
exports.up = async function (knex) {
    await knex.schema
        .createTable('categories', tbl => {
            tbl.increments('category_id')
            tbl.string('category_name').unique().notNullable()
        })
        .createTable('products', tbl => {
            tbl.increments('product_id')
            tbl.boolean('active').defaultTo(true)
            tbl.string('product_name').unique().notNullable()
            tbl.integer('category_id')
                .notNullable()
                .unsigned()
                .references('category_id')
                .inTable('categories')
                .onDelete('CASCADE')
                .onUpdate("RESTRICT")
            tbl.integer('product_inventory').unsigned().defaultTo(0)
            tbl.decimal('product_price').unsigned().notNullable()
            tbl.string('product_description', 1000)
            tbl.string('image_url').notNullable()
        })
        .createTable('reviews', tbl => {
            tbl.increments('review_id')
            tbl.string('review_name')
            tbl.integer('review_rating').unsigned().notNullable()
            tbl.string('review_title')
            tbl.string('review_details')
            tbl.integer('product_id')
                .unsigned()
                .notNullable()
                .references('product_id')
                .inTable('products')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            tbl.string('review_date')
        })
        .createTable('roles', tbl => {
            tbl.increments('role_id')
            tbl.string('role_name').notNullable()
        })
        .createTable('users', tbl => {
            tbl.increments('user_id')
            tbl.string('username').notNullable().unique()
            tbl.string('password').notNullable()
            tbl.integer('role_id')
                .unsigned()
                .notNullable()
                .references('role_id')
                .inTable('roles')
                .onUpdate('CASCADE')
                .onDelete('RESTRICT')
        })
};

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('reviews')
        .dropTableIfExists('products')
        .dropTableIfExists('categories')
        .dropTableIfExists('users')
        .dropTableIfExists('roles')
};
