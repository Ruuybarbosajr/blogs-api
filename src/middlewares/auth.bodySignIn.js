const joi = require('joi');

const schema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

module.exports = (req, _res, next) => {
  const { email, password } = req.body;
  const { error } = schema.validate({ email, password });
  if (error) return next({ status: 400, message: 'Some required fields are missing' });
  next();
};