const joi = require('joi');
const util = require('../utils');

const schema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
  categoryIds: joi.array().required(),
});

module.exports = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;
  const { error } = schema.validate({ title, content, categoryIds });
  if (error) return next(util.generateError(400, 'Some required fields are missing'));
  next();
};