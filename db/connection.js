const { Client } = require('pg');
const _ = require('lodash');

/**
 * Connection class
 */
class Connection {
  constructor() { }

  async client() {
    const client = await new Client({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      ssl: process.env.DB_SSL,
      database: process.env.DB,
      user: process.env.DB_USER,
      password: process.env.DB_PASS
    });

    await client.connect();

    return client;
  }

  async _q(query) {
    return await (await this.client()).query(query);
  }

  /**
   * gogo
   * @param {*} query 
   */
  async select(query) {
    const result = await this._q(query);
    return result.rows;
  }

  /**
   * 
   * @param {*} query 
   */
  async dml(query) {
    const result = await this._q(query);
    
    switch (result.command) {
      case 'INSERT':
      return {
        success: result.rowCount > 0,
        returnedId: _.first(result.rows).id
      };
      case 'UPDATE':
        return {
          success: result.rowCount > 0
        };
      default:
        return {};
    }
  }
}

module.exports = new Connection();
