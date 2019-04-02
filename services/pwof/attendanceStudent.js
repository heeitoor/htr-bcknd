const knex = require('../../db/knexConnection');
const _ = require('lodash');

class AttendanceStudentService {
  constructor() {
    this.tableName = 'attendanceStudent';
  }

  async add({ attendanceId, classId, number }) {
    const studentClasses = await knex('studentClass').where('classId', classId);

    const addStudentClasses = async () => {
      for (const studentClass of studentClasses) {
        await knex(this.tableName).insert({
          attendanceId,
          studentId: studentClass.studentId,
          status: true,
          index: number
        });
      }
    };

    if (number === 1) {
      const result = await knex(this.tableName)
        .where('attendanceId', attendanceId)
        .where('index', '>', 1)
        .del();

      if (result === 0) {
        await addStudentClasses();
      }
    } else {
      await addStudentClasses();
    }
  }

  async addSingle({ studentAttendanceId, studentstatus }) {
    await knex(this.tableName)
      .where('id', studentAttendanceId)
      .update('status', !studentstatus);
  }

  async get({ attendanceId }) {
    const response = await knex.raw(
      `
        select tc."classId", c.name "className", s.id studentId, a.date attendanceDate, a.status attendanceStatus, s.name studentName, "as".id "studentAttendanceId","as".status studentStatus
        from "attendance" a
        join "attendanceStudent" "as" on a.id = "as"."attendanceId"
        join student s on "as"."studentId" = s.id
        join "teacherClass" tc on a."teacherClassId" = tc.id
        join "class" c on tc."classId" = c.id
        where a.id = ${attendanceId}
        order by "as".id asc;
      `
    );

    const studentList = _.chain(response.rows)
      .groupBy('studentid')
      .map((items, key) => {
        return {
          id: key,
          name: items[0].studentname,
          attendances: items.map(item => {
            return {
              studentAttendanceId: item.studentAttendanceId,
              studentstatus: item.studentstatus
            };
          })
        };
      })
      .value();

    const result = {
      attendanceId: parseInt(attendanceId),
      classId: parseInt(response.rows[0].classId),
      className: response.rows[0].className,
      attendanceDate: response.rows[0].attendancedate,
      attendanceStatus: response.rows[0].attendancestatus,
      list: studentList
    };

    return result;
  }
}

module.exports = new AttendanceStudentService();
