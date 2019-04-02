const TeacherClassController = require('../controllers/teacherClass');

module.exports = router => {
  router.get('/teacherClass/:teacherId/:date', async (req, res) => {
    res.send(await TeacherClassController.get(req.params));
  });

  return router;
};
