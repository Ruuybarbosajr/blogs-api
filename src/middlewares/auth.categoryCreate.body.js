const joi = require('joi');
const util = require('../utils');

const schema = joi.object({
  name: joi.string().required(),
});

module.exports = (req, _res, next) => {
  const { name } = req.body;
  const { error } = schema.validate({ name });
  if (error) return next(util.generateError(400, error.message));
  next();
};