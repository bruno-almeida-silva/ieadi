
exports.up = function(knex, Promise) {
    return knex.schema.createTable('churchs', table => {
        table.increments('id').primary()
        table.string('ecclesiasticalName', 50).notNull()
        table.string('hierarchy', 20).notNull()
        table.boolean('status').notNull()
        table.string('photoUrl')
        table.string('street', 50).notNull()
        table.string('number', 10)
        table.string('district', 50).notNull()
        table.string('city', 50).notNull()
        table.string('zipCode', 10).notNull()
        table.string('email', 100)
        table.string('phone', 11)
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('churchs')
};
