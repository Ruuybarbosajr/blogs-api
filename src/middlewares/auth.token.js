const util = require('../utils');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return next(util.generateError(401, 'Token not found'));
  try {
    const user = util.decodedToken(authorization);
    req.user = user.data;
    next();
  } catch (error) {
    next(util.generateError(401, 'Expired or invalid token'));
  }
};
