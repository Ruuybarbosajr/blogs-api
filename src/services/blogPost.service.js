const Sequelize = require('sequelize');
const { BlogPost } = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

module.exports = {
  async create(newPost, user) {
    console.log(newPost, user);
    const created = await sequelize.transaction(async (transaction) => {
      const post = await BlogPost.create(
        {
          title: newPost.title,
          content: newPost.content,
          userId: user.id,
        },
        { transaction },
      );

      await post.addCategories(newPost.categoryIds, { transaction });

      return post;
    });

    return created;
  },
};