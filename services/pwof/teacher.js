const knex = require('../../db/knexConnection');
const md5 = require('md5');

class TeacherService {
  constructor() {
    this.tableName = 'teacher';
  }

  async login({ userName, password }) {
    return await knex(this.tableName)
      .where('userName', userName)
      .where('password', md5(password))
      .first();
  }
}

module.exports = new TeacherService();
