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
};