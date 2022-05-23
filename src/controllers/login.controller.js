const service = require('../services');

module.exports = {
  async signIn(req, res, next) {
    const { email, password } = req.body;
    try {
      const token = await service.login.signIn(email, password);
      return res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  },
};