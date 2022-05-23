const jwt = require('jsonwebtoken');
const util = require('../utils');
require('dotenv').config();

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return next(util.generateError(401, 'Token not found'));
  
  try {
    const user = jwt.verify(authorization, process.env.JWT_SECRET);
    req.user = user;
    next();
  } catch (error) {
    next(util.generateError(401, 'Expired or invalid token'));
  }
};