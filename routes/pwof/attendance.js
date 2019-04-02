const schema = require('../schemas/Frekvens');
const AttendanceController = require('../controllers/attendance');

module.exports = router => {
  router.post('/attendance', async (req, res) => {
    const attendanceId = await AttendanceController.add(req.body);

    res.send({
      ok: attendanceId
    });
  });

  return router;
};
