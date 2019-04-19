const StudentClassController = require('../controllers/studentClass');

module.exports = router => {
  router
    .post('/studentClass', async (req, res) => {
      res.send(await StudentClassController.add(req.body));
    })
    .delete('/studentClass/:id', async (req, res) => {
      console.log(req.params)
      res.send(await StudentClassController.remove(req.params));
    });

  return router;
};
