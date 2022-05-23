const service = require('../services');

module.exports = {
  async create(req, res, next) {
    const { name } = req.body;
    try {
      const newCategory = await service.category.create(name);
      return res.status(201).json(newCategory);
    } catch (error) {
      next(error);
    }
  },

  async getAll(_req, res, next) {
    try {
      const categories = await service.category.getAll();
      return res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  },
};