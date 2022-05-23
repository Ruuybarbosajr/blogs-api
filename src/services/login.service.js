const { User } = require('../database/models');
const generateToken = require('../utils/generateToken');

module.exports = {
  async login(email, password) {
    const verifyUser = await User.findOne({ where: { email } });

    if (!verifyUser || verifyUser.password !== password) {
      const error = { status: 400, message: 'Invalid fields' };
      throw error;
    }

    const token = generateToken();
    return token;
  },
};