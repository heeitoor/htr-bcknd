const pg = require('pg');

require('dotenv').config();
pg.defaults.ssl = true;

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    ssl: process.env.DB_SSL
  },
  searchPath: ['knex', 'public']
});

module.exports = knex;
