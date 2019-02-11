const { Client } = require('pg');
const path = require('path');
// require('dotenv').config({
//   path: require('find-config')('.env')
// });

class Connection {
  constructor() {}

  async instance() {
    this.client = await new Client({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      ssl: process.env.DB_SSL,
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    });

    // await this.client.connect();
    await this.client.connect();

    // const r = await client.query(`select * from teacher`);

    return this.client;
  }
}

module.exports = new Connection();
