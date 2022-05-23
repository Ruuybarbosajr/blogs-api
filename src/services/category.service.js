const { Category } = require('../database/models');

module.exports = {
  async create(name) {
    const newCategory = await Category.create({ name });
    return {
      id: newCategory.dataValues.id,
      name,
    };
  },
};