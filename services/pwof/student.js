const knex = require('../../db/knexConnection');

class StudentService {
  constructor() {
    this.tableName = 'student';
  }

  async get() {
    return await knex(this.tableName);
  }

  async insert({ code, name }) {
    return await knex(this.tableName).insert({
      code,
      name,
    });
  }

  async update({ id, code, name }) {
    return await knex(this.tableName)
      .where('id', id)
      .update({
        code,
        name,
      });
  }
}

module.exports = new StudentService();
