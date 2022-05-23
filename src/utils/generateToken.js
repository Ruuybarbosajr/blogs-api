const jwt = require('jsonwebtoken');
require('dotenv').config();

const config = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

module.exports = (payload) => {
  const token = jwt.sign({ data: payload }, process.env.JWT_SECRET, config);
  return token;
};
