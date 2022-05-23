const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (authorization) => {
  jwt.verify(authorization, process.env.JWT_SECRET);
};