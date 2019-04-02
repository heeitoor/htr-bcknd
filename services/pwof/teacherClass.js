const knex = require('../../db/knexConnection');

class TeacherClassService {
  constructor() {
    this.tableName = 'teacher';
  }

  async get({ teacherId, date }) {
    const response = await knex.raw(`
        select tc.id "teacherClassId", c.id "classId", c.name "className", a.id "attendanceId", a.date "attendanceDate"
        from "teacherClass" tc
        join "class" c on c.id = tc."classId"
        left join attendance a on tc.id = a."teacherClassId" and a.date = '${date}'
        where tc."teacherId" = ${teacherId};
    `);
    return response.rows;
  }
}

module.exports = new TeacherClassService();
