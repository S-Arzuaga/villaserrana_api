const express = require('express');

const LineService = require('../services/line.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createLineSchema,
  updateLineSchema,
  getLineSchema,
} = require('../schemas/line.schema');

const router = express.Router();
const service = new LineService();

router.get('/', async (req, res, next) => {
  try {
    const lines = await service.find();
    res.json(lines);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getLineSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const line = await service.findOne(id);
      res.json(line);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createLineSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newLine = await service.create(body);
      res.status(201).json(newLine);
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getLineSchema, 'params'),
  validatorHandler(updateLineSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const line = await service.update(id, body);
      res.json(line);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getLineSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
