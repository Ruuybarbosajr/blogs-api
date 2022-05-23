const service = require('../services/login.service');

module.exports = {
  async login(req, res, next) {
    const { email, password } = req.body;
    try {
      const token = await service.login(email, password);
      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  },
};