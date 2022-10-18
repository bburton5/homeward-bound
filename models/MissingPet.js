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
    zip_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_lost: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contact_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "MissingPet",
  }
);

module.exports = MissingPet;
