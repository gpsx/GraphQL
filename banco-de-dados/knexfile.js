// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    database: 'graphQL',
    user:     'root',
    password: 'bandtec'
    //password: '1234567'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
