const router = require('express').Router();
const middleware = require('../middlewares');
const controller = require('../controllers');

router.post(
  '/',
  middleware.auth.token,
  middleware.auth.bodyBlogPost,
  controller.blogPost.create,
);

router.get('/', middleware.auth.token, controller.blogPost.getAll);

router.get('/:id', middleware.auth.token, controller.blogPost.getById);

module.exports = router;