const router = require('express').Router();
const middleware = require('../middlewares');
const controller = require('../controllers');

router.post('/', middleware.authBodyCreate, controller.user.create);
router.get('/', middleware.authToken, controller.user.getAll);

module.exports = router;