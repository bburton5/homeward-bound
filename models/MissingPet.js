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
      allowNull: false,
    },
    pet_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date_lost: {
      type: DataTypes.DATE,
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
