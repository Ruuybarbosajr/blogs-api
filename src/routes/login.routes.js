const router = require('express').Router();
const controller = require('../controllers');
const middleware = require('../middlewares');

router.post('/', middleware.auth.bodyLogin, controller.login.signIn);

module.exports = router;