const router = require('express').Router();
const middleware = require('../middlewares');
const controller = require('../controllers');

router.post('/', middleware.auth.bodyUser, controller.user.create);
router.get('/', middleware.auth.token, controller.user.getAll);
router.get('/:id', middleware.auth.token, controller.user.getById);

module.exports = router;