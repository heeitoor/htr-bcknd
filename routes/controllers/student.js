const StudentService = require('../../services/pwof/student');

class StudentController {
  async get() {
    const response = await StudentService.get();

    return response.map(item => {
      return {
        id: item.id,
        code: item.code,
        name: item.name,
      };
    });
  }

  async save({ id, code, name }) {
    let response;

    if (id > 0) {
      response = await StudentService.update({
        id,
        code,
        name,
      });
    } else {
      response = await StudentService.insert({
        code,
        name,
      });
    }

    return response;
  }
}

module.exports = new StudentController();
