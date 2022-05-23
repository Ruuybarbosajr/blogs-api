const router = require('express').Router();
const middleware = require('../middlewares');
const controller = require('../controllers');

router.post('/', middleware.authBodyCreate, controller.user.create);

module.exports = router;