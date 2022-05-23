const service = require('../services');

module.exports = {
  async create(req, res, next) {
    const { displayName, email, password, image } = req.body;
    try {
      const token = await service.user.create({ displayName, email, password, image });
      return res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  },

  async getAll(_req, res, next) {
    try {
      const users = await service.user.getAll();
      return res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  },
};