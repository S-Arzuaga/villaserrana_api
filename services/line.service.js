const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class LineService {
  constructor() {}
  async create(data) {
    try {
      const newLine = await models.Line.create(data);
      return newLine;
    } catch (err) {
      throw new Error(err);
    }
  }

  async find() {
    const rta = await models.Line.findAll({
      include: ['category', 'products'],
    });
    return rta;
  }

  async findOne(id) {
    const line = await models.Line.findByPk(id);
    if (!line) {
      throw boom.notFound('product not found');
    }
    return line;
  }

  async update(id, changes) {
    const line = await this.findOne(id);
    const rta = await line.update(changes);
    return rta;
  }

  async delete(id) {
    const line = await this.findOne(id);
    await line.destroy();

    return { id };
  }
}

module.exports = LineService;
