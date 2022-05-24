const joi = require('joi');
const util = require('../utils');

const schema = joi.object({
  title: joi.string().required(),
  content: joi.string().required(),
});

module.exports = (req, _res, next) => {
  const { title, content } = req.body;
  const { error } = schema.validate({ title, content });
  if (error) return next(util.generateError(400, 'Some required fields are missing'));
  next();
};