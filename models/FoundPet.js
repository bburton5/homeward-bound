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
      allowNull: false,
    },
    animal_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    animal_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    animal_age: {
      type: DataTypes.INTEGER,
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
      allowNull: false,
    },
    found_on: {
      // moment
      type: DataTypes.DATE,
      allowNull: false,
    },
    found_at: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
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
