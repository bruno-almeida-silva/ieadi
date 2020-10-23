// Update with your config settings.

module.exports = {
  client: 'mysql2',
  connection: {
    database: 'db',
    user:     'root',
    password: 'root'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
