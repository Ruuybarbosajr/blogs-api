const joi = require('joi');
const util = require('../utils');

const schema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

module.exports = (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = schema.validate({ email, password });
  if (error) return next(util.generateError(400, 'Some required fields are missing'));
  next();
};