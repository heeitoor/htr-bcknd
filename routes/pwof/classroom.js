const ClassroomController = require('../controllers/classroom');

module.exports = router => {
  router
    .get('/classroom', async (req, res) => {
      res.send(await ClassroomController.get());
    })
    .get('/classroom/:id/:edit?', async (req, res) => {
      res.send(await ClassroomController.getById(req.params));
    });

  return router;
};
