const knex = require('../../db/knexConnection');
const md5 = require('md5');

class AttendanceService {
  constructor() {
    this.tableName = 'attendance';
  }

  async add({ date, teacherClassId }) {
    return await knex(this.tableName)
      .insert({
        date,
        teacherClassId,
        status: 'OPEN'
      })
      .returning('id');
  }
}

module.exports = new AttendanceService();
