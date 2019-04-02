const AttendanceService = require('../../services/pwof/attendance');
const AttendanceStudentService = require('../../services/pwof/attendanceStudent');

class AttendanceController {
  async add({ date, classId, teacherClassId, number }) {
    const response = await AttendanceService.add({ date, teacherClassId });
    const newId = response[0];

    await AttendanceStudentService.add({
      attendanceId: newId,
      classId,
      number
    });

    return newId;
  }
}

module.exports = new AttendanceController();
