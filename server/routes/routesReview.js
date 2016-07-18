var controllers = require('../controllers/reviewCtrl.js');
var router = require('express').Router();
var helpers = require('../helpers/helpers.js');

for (var route in controllers) {
  router.route(route)
  .get(controllers[route].get)
  .post(helpers.checkToken, controllers[route].post)
  .put(controllers[route].put)
  .delete(controllers[route].delete);
}

module.exports = router;