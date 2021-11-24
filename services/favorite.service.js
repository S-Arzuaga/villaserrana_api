const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class FavoriteService {
  constructor() {}
  async create(data) {
    const newFavorite = await models.Favorite.create(data);
    return newFavorite;
  }

  async find() {
    const rta = await models.Favorite.findAll({ includes: ['products'] });
    return rta;
  }

  async findOne(id) {
    const favorite = await models.Favorite.findByPk(id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    return favorite;
  }

  async update(id, changes) {
    const favorite = await this.findOne(id);
    const rta = await favorite.update(changes);
    return rta;
  }

  async delete(id) {
    const favorite = await this.findOne(id);
    await favorite.destroy();

    return { id };
  }
}

module.exports = FavoriteService;
