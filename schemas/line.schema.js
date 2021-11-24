const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const categoryId = Joi.number().integer();

const createLineSchema = Joi.object({
  name: name.required(),
  categoryId: categoryId.required(),
});

const updateLineSchema = Joi.object({
  name,
  categoryId,
});

const getLineSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createLineSchema,
  updateLineSchema,
  getLineSchema,
};
