const router = require('express').Router();
const middleware = require('../middlewares');
const controller = require('../controllers');

router.post('/', middleware.auth.token, middleware.auth.bodyCategory, controller.category.create);

module.exports = router;