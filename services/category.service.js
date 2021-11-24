const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class CategoryService {
  constructor() {}
  async create(data) {
    const newProduct = await models.Category.create(data);
    return newProduct;
  }

  async find() {
    const rta = await models.Category.findAll({
      include: [
        {
          model: models.Line,
          as: 'lines',
          include: [{ model: models.Product, as: 'products' }],
        },
      ],
    });
    return rta;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    return category;
  }

  async update(id, changes) {
    const category = await this.findOne(id);
    const rta = await category.update(changes);
    return rta;
  }

  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();

    return { id };
  }
}

module.exports = CategoryService;
