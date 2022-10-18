const sequelize = require("../config/connection");
const { MissingPet } = require("../models");

const missingPetData = require("./missingPetData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const missingpet of missingPetData) {
    await MissingPet.create({
      ...missingpet,
    });
  }

  process.exit(0);
};

seedDatabase();
