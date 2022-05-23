const { User } = require('../database/models');
const generateToken = require('../utils/generateToken');

module.exports = {
  async create(newUser) {
    const user = await User.findOne({ where: { email: newUser.email } });

    if (user) {
      const error = { status: 409, message: 'User already registered' };
      throw error;
    }

    const createdUser = await User.create(newUser);
    delete createdUser.dataValues.password;
    const payload = createdUser.dataValues;

    const token = generateToken(payload);
    return token;
  },
}; 