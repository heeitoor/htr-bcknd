const schema = require('../schemas/Frekvens');
const TeacherController = require('../controllers/teacher');

module.exports = router => {
  router.post('/teacher', schema.teacherPost, async (req, res) => {
    res.send(await TeacherController.login(req.body));
  });

  return router;
};
