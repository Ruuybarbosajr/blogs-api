const error = require('./error.middleware');
const bodyLogin = require('./auth.login.body');
const bodyUser = require('./auth.user.body');
const token = require('./auth.token');
const bodyCategory = require('./auth.category.body');
const bodyBlogPost = require('./auth.blogPost.body');

module.exports = {
  error,
  auth: {
    bodyLogin,
    bodyUser,
    token,
    bodyCategory,
    bodyBlogPost,
  },
};