const AttendanceStudentService = require('../../services/pwof/attendanceStudent');

class AttendanceStudentController {
  async add({ attendanceId, classId, number }) {
    await AttendanceStudentService.add({
      attendanceId,
      classId,
      number
    });
    return {};
  }

  async addSingle({ studentAttendanceId, studentstatus }) {
    await AttendanceStudentService.addSingle({
      studentAttendanceId,
      studentstatus
    });
    return {};
  }

  async get({ attendanceId }) {
    return await AttendanceStudentService.get({ attendanceId });
  }
}

module.exports = new AttendanceStudentController();
