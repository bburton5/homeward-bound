const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MissingPet extends Model {}

MissingPet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    pet_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    date_lost: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    contact_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "missingpet",
  }
);

module.exports = MissingPet;
