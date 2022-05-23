const { User } = require('../database/models');
const util = require('../utils');

module.exports = {
  async signIn(email, password) {
    const user = await User.findOne({ where: { email } });
    
    if (!user || user.password !== password) {
      throw util.generateError(400, 'Invalid fields');
    }
    
    delete user.dataValues.password;
    const playload = user.dataValues;

    const token = util.generateToken(playload);

    return token;
  },
};