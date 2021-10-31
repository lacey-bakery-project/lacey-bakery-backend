
exports.up = async function (knex) {
    await knex.schema
        .createTable('categories', tbl => {
            tbl.increments('category_id')
            tbl.string('category_name').unique().notNullable()
        })
        .createTable('products', tbl => {
            tbl.increments('product_id')
            tbl.string('product_name').unique().notNullable()
            tbl.integer('category_id')
                .notNullable()
                .unsigned()
                .references('category_id')
                .inTable('categories')
                .onDelete('CASCADE')
                .onUpdate("RESTRICT")
            tbl.integer('product_inventory').unsigned().notNullable()
            tbl.decimal('product_price').notNullable()
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
};

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('reviews')
        .dropTableIfExists('products')
        .dropTableIfExists('categories')
};
