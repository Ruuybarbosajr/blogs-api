const Sequelize = require('sequelize');
const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../database/models');
const config = require('../database/config/config');
const util = require('../utils');

const sequelize = new Sequelize(config.development);

module.exports = {
  async create(newPost, user) {
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

  async update(updatedPost, ids) {
    const post = await BlogPost.findByPk(ids.postId);

    if (post.userId !== ids.userId) throw util.generateError(401, 'Unauthorized user');

    await BlogPost.update(
      { title: updatedPost.title, content: updatedPost.content },
      { where: { id: ids.postId, userId: ids.userId } },
    );
    
    const update = await BlogPost.findByPk(ids.postId, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    });

    return update;
  },

  async delete(id, user) {
    const post = await BlogPost.findByPk(id);
    
    if (!post) throw util.generateError(404, 'Post does not exist');
    if (post.userId !== user.id) throw util.generateError(401, 'Unauthorized user');

    await BlogPost.destroy({ where: { id, userId: user.id } });
  },

  async search(search) {
    const posts = await BlogPost.findAll({
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${search}%` } },
          { content: { [Op.like]: `%${search}%` } },
        ],
      },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return posts;
  },
};