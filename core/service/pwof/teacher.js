const knex = require('../../../db/knexConnection');
const md5 = require('md5');

class TeacherService {
  constructor() {
    this.tableName = 'teacher';
  }

  async get() {
    return await knex(this.tableName);
  }

  async login({ userName, password }) {
    return await knex(this.tableName)
      .where('userName', userName)
      .where('password', md5(password))
      .first();
  }

  edit() {
    return connection.dml(
      `update class
            set name = 'hhh'
            where id = 9`
    );
  }
}

module.exports = new TeacherService();
