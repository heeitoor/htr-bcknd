const AttendanceStudentController = require('../controllers/attendanceStudent');

module.exports = router => {
  router
    .get('/attendanceStudent/:attendanceId', async (req, res) => {
      res.send(await AttendanceStudentController.get(req.params));
    })
    .put('/attendanceStudent', async (req, res) => {
      await AttendanceStudentController.add(req.body);
      res.send({});
    })
    .put('/attendanceStudent/single', async (req, res) => {
      await AttendanceStudentController.addSingle(req.body);
      res.send({});
    });

  return router;
};
