const pg = require('pg');

pg.defaults.ssl = true;

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    ssl: true
  },
  searchPath: ['knex', 'public']
});

module.exports = knex;
