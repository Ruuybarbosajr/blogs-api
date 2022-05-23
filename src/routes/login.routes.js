const router = require('express').Router();
const controller = require('../controllers/login.controller');
const middleware = require('../middlewares');

router.post('/', middleware.authBody, controller.login);

module.exports = router;