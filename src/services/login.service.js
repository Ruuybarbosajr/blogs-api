const { User } = require('../database/models');
const generateToken = require('../utils/generateToken');

module.exports = {
  async signIn(email, password) {
    const user = await User.findOne({ where: { email } });
    
    if (!user || user.password !== password) {
      const error = { status: 400, message: 'Invalid fields' };
      throw error;
    }
    
    delete user.dataValues.password;
    const playload = user.dataValues;

    const token = generateToken(playload);

    return token;
  },
};