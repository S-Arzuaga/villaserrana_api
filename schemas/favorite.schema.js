const Joi = require('joi');

const id = Joi.number().integer();
const categoryId = Joi.number().integer();
const productId = Joi.number().integer();

const createFavoriteSchema = Joi.object({
  categoryId: categoryId.required(),
  productId: productId.required(),
});

const updateFavoriteSchema = Joi.object({
  categoryId,
  productId,
});

const getFavoriteSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createFavoriteSchema,
  updateFavoriteSchema,
  getFavoriteSchema,
};
