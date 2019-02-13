const Joi = require('joi');

class FrekvensSchema {
  post(req, res, next) {
    // const postSchema = Joi.object({
    //   userName: Joi.string().required(),
    //   password: Joi.string().required()
    // });

    // const result = await Joi.validate(req.body, postSchema);

    console.log('yo');
res.send('yo');
    //next();
  }
}

module.exports = new FrekvensSchema();
