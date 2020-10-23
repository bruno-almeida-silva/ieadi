
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name', 50).notNull()
        table.string('email', 100).notNull().unique()
        table.string('password').notNull()
        table.integer('churchId').unsigned()
        table.foreign('churchId').references('churchs.id')
        table.string('role', 20).notNull()
        table.string('phone', 11).notNull()
        table.string('code', 2)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users')
  };