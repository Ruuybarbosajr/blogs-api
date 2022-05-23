const joi = require('joi');

const schema = joi.object({
  displayName: joi.string().required().min(8),
  email: joi.string().required().email(),
  password: joi.string().required().min(6),
  image: joi.string().required(),
});

module.exports = (req, _res, next) => {
  const { displayName, email, password, image } = req.body;
  const { error } = schema.validate({ displayName, email, password, image });
  if (error) next({ status: 400, message: error.message });
  next();
};