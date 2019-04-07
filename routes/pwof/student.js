const StudentController = require('../controllers/student');

module.exports = router => {
  router
    .get('/student', async (req, res) => {
      const result = await StudentController.get();

      res.send(result);
    })
    .post('/student', async (req, res) => {
      const result = await StudentController.save(req.body);
      res.send(result);
    })
    .put('/student', async (req, res) => {
      const result = await StudentController.save(req.body);
      console.log('result', result);
      res.send('result');
    });

  return router;
};
