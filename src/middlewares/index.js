const error = require('./error.middleware');
const bodyLogin = require('./auth.login.body');
const bodyUserCreate = require('./auth.userCreate.body');
const token = require('./auth.token');
const bodyCategoryCreate = require('./auth.categoryCreate.body');
const bodyBlogPostCreate = require('./auth.blogPosCreate.body');
const bodyBlogPostUpdate = require('./auth.blogPostUpdate.body');

module.exports = {
  error,
  auth: {
    bodyLogin,
    bodyUserCreate,
    token,
    bodyCategoryCreate,
    bodyBlogPostCreate,
    bodyBlogPostUpdate,
  },
};