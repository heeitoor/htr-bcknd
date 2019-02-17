const Joi = require('joi');

class FrekvensSchema {
  async teacherPost(req, res, next) {
    const postSchema = Joi.object({
      userName: Joi.string().required(),
      password: Joi.string().required()
    });

    try {
      await Joi.validate(req.body, postSchema);
      next();
    } catch (x) {
      res.send({
        errors: x.details
      });
    }
  }

  async attendancePost(req, res, next) {
    const schema = Joi.object({
      teacherclassId: Joi.string().required(),
      date: Joi.date().required()
    });

    try {
      await Joi.validate(req.query, schema);
      next();
    } catch (x) {
      res.send({
        errors: x.details
      });
    }
  }
}

module.exports = new FrekvensSchema();
