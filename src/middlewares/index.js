const error = require('./error.middleware');
const authBodySignIn = require('./auth.bodySignIn');
const authBodyCreate = require('./auth.bodyCreate');
const authToken = require('./auth.token');

module.exports = {
  error,
  authBodySignIn,
  authBodyCreate,
  authToken,
};