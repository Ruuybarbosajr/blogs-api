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

  async getById(req, res, next) {
    const { id } = req.params;
    try {
      const post = await service.blogPost.getById(id);
      return res.status(200).json(post);
    } catch (error) {
      next(error);
    }
  },

  async update(req, res, next) {
    const { title, content } = req.body;
    const { id } = req.params;
    try {
      const updated = await service.blogPost.update(
        { title, content },
        { userId: req.user.id, postId: id },
      );
      return res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  },

  async delete(req, res, next) {
    const { id } = req.params;
    try {
      await service.blogPost.delete(id, req.user);
      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  },

  async search(req, res, next) {
    const { q: search } = req.query;
    try {
      const posts = await service.blogPost.search(search);
      return res.status(200).json(posts);
    } catch (error) {
      next(error);
    }
  },
};