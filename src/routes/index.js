const login = require('./login.routes');
const user = require('./user.routes');
const category = require('./category.routes');
const blogPost = require('./blogPost.routes');

module.exports = {
  login,
  user,
  category,
  blogPost,
};