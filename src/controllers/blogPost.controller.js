const service = require('../services');
const util = require('../utils');

module.exports = {
  async create(req, res, next) {
    const { title, content, categoryIds } = req.body;
    try {
      const newPost = await service.blogPost.create({ title, content, categoryIds }, req.user);
      return res.status(201).json(newPost);
    } catch (error) {
      next(util.generateError(400, '"categoryIds" not found'));
    }
  },
};