const knex = require('../../db/knexConnection');

class StudentClassService {
  constructor() {
    this.tableName = 'studentClass';
  }

  async add({ studentId, classId }) {
    const response = await knex(this.tableName)
      .insert({
        studentId,
        classId,
        status: 'Fre',
      })
      .returning('id');

    return {
      id: response[0],
    };
  }

  async remove(id) {
    await knex(this.tableName)
      .where('id', id)
      .del();

    return true;
  }
}

module.exports = new StudentClassService();
