const schema = require('../schemas/Frekvens');
const TeacherController = require('../controllers/teacher');

module.exports = router => {
  router.post('/teacher', schema.teacherPost, async (req, res) => {
    console.log(req.body)
    res.send(await TeacherController.login(req.body));
  });

  return router;
};
