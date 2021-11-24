const { Category, CategorySchema } = require('./category.model');
const { Product, ProductSchema } = require('./product.model');
const { Line, LineSchema } = require('./line.model');

function setupModels(sequelize) {
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Line.init(LineSchema, Line.config(sequelize));

  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Line.associate(sequelize.models);
}

module.exports = setupModels;
