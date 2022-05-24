const Sequelize = require('sequelize');
const { BlogPost, User, Category } = require('../database/models');
const config = require('../database/config/config');
const util = require('../utils');

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

  async getAll() {
    const posts = BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });
    return posts;
  },

  async getById(id) {
    const post = await BlogPost.findByPk(id);

    if (!post) throw util.generateError(404, 'Post does not exist');
  
    post.user = await post.getUser({ attributes: { exclude: ['password'] } });
    post.categories = await post.getCategories();

    return { 
      ...post.dataValues,
      user: post.user,
      categories: post.categories,
    };
  },
};