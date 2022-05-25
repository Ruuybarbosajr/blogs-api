const { User } = require('../database/models');
const util = require('../utils');

module.exports = {
  async create(newUser) {
    const user = await User.findOne({ where: { email: newUser.email } });
    
    if (user) {
      throw util.generateError(409, 'User already registered');
    }

    const createdUser = await User.create(newUser);
    console.log(createdUser);
    delete createdUser.dataValues.password;
    const payload = createdUser.dataValues;

    const token = util.generateToken(payload);
    return token;
  },

  async getAll() {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users;
  },

  async getById(id) {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) {
      throw util.generateError(404, 'User does not exist');
    }
    return user;
  },

  async delete(id) { await User.destroy({ where: { id } }); },
};
