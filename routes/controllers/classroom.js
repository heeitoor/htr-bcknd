const ClassroomService = require('../../services/pwof/classroom');

class ClassroomController {
  async get() {
    const response = await ClassroomService.get();

    return response;
  }

  async getById({ id, edit }) {
    const response = await ClassroomService.getById({ id, edit });

    return response;
  }

  async save({ id, name }) {
    const response = await ClassroomService.save({
      id,
      name,
    });

    return response;
  }
}

module.exports = new ClassroomController();
