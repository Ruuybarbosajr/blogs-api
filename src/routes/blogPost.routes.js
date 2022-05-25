const router = require('express').Router();
const middleware = require('../middlewares');
const controller = require('../controllers');

router.post(
  '/',
  middleware.auth.token,
  middleware.auth.bodyBlogPostCreate,
  controller.blogPost.create,
);

router.get('/', middleware.auth.token, controller.blogPost.getAll);
router.get('/search', middleware.auth.token, controller.blogPost.search);
router.get('/:id', middleware.auth.token, controller.blogPost.getById);

router.put(
  '/:id',
  middleware.auth.token,
  middleware.auth.bodyBlogPostUpdate,
  controller.blogPost.update,
);

router.delete('/:id', middleware.auth.token, controller.blogPost.delete);

module.exports = router;