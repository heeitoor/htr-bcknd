const TeacherClassService = require('../../services/pwof/teacherClass');

class TeacherClassController {
  async get({ teacherId, date }) {
    return await TeacherClassService.get({ teacherId, date });
  }
}

module.exports = new TeacherClassController();
