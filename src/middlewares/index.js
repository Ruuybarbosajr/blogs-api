const error = require('./error.middleware');
const authBodySignIn = require('./auth.bodySignIn');
const authBodyCreate = require('./auth.bodyCreate');

module.exports = {
  error,
  authBodySignIn,
  authBodyCreate,
};