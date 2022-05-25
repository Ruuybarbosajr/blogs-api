const router = require('express').Router();
const middleware = require('../middlewares');
const controller = require('../controllers');

router.post(
  '/',
  middleware.auth.token,
  middleware.auth.bodyCategoryCreate,
  controller.category.create,
);

router.get(
  '/',
  middleware.auth.token,
  controller.category.getAll,
);

module.exports = router;