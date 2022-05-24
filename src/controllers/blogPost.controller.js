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

  async getAll(_req, res, next) {
    try {
      const posts = await service.blogPost.getAll();
      return res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  },
};