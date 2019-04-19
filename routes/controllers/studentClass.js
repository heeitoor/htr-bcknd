const StudentClassService = require('../../services/pwof/studentClass');

class StudentClassController {
  async add({ studentId, classId }) {
    const response = await StudentClassService.add({ studentId, classId });

    return response;
  }

  async remove({ id }) {
    const response = await StudentClassService.remove(id);

    return response;
  }
}

module.exports = new StudentClassController();
