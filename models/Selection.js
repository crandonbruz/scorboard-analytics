const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Selection extends Model {}

Selection.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    playerName: {
      type: DataTypes.STRING,
    },
    pitcherName: {
        type: DataTypes.STRING,
      },
      winLose: {
        type: DataTypes.STRING,
      },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'selection',
  }
);

module.exports = Selection;
