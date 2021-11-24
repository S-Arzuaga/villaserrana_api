const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();
const lineId = Joi.number().integer();
const size = Joi.string();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  size: size.required(),
  lineId: lineId.required(),
});

const updateProductSchema = Joi.object({
  name,
  price,
  image,
  size,
  lineId,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
};
