const { Model, DataTypes, Sequelize } = require('sequelize');

const FAVORITE_TABLE = 'favorites';

const FavoriteSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  categoryId: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    unique: true,
    allowNull: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
};

class Favorite extends Model {
  static associate(models) {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: FAVORITE_TABLE,
      modelName: 'Favorite',
      timestamps: false,
    };
  }
}

module.exports = { FAVORITE_TABLE, FavoriteSchema, Favorite };
