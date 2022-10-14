const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class FoundPet extends Model {}

FoundPet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    animal_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    animal_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    animal_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    animal_age: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    animal_gender: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    animal_breed: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    animal_color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    found_on: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    found_at: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "foundpet",
  }
);

module.exports = FoundPet;
