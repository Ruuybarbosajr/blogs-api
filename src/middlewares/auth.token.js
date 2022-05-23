const util = require('../utils');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return next(util.generateError(401, 'Token not found'));
  try {
    util.decodedToken(authorization);
    next();
  } catch (error) {
    next(util.generateError(401, 'Expired or invalid token'));
  }
};
