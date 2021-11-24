const express = require('express');

const FavoriteService = require('../services/favorite.service');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createFavoriteSchema,
  updateFavoriteSchema,
  getFavoriteSchema,
} = require('../schemas/favorite.schema');

const router = express.Router();
const service = new FavoriteService();

router.get('/', async (req, res, next) => {
  try {
    const favorites = await service.find();
    res.json(favorites);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getFavoriteSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const favorite = await service.findOne(id);
      res.json(favorite);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createFavoriteSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newFavorite = await service.create(body);
      res.status(201).json(newFavorite);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getFavoriteSchema, 'params'),
  validatorHandler(updateFavoriteSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const favorite = await service.update(id, body);
      res.json(favorite);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getFavoriteSchema, 'params'),
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
