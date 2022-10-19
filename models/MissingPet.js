const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class MissingPet extends Model {}

MissingPet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
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
      defaultValue:"animal",
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:"animal",
    },
    zip_code: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:"123123",
    },
    date_lost: {
<<<<<<< HEAD
      type: DataTypes.INTEGER,
=======
      type: DataTypes.STRING,
>>>>>>> 01d47ed303b34e242b20cb0b08df2abc4fb73d3b
      allowNull: true,
      defaultValue:"2022-10-18",
    },
    contact_number: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:"11111",
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
