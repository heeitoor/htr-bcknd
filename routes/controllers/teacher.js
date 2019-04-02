const TeacherService = require('../../services/pwof/teacher');

class TeacherController {
  async login({ userName, password }) {
    const response = await TeacherService.login({ userName, password });
    const result = {
      id: response.id,
      name: response.name
    };
    return result;
  }
}

module.exports = new TeacherController();
