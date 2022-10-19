const sequelize = require("../config/connection");
const { User, MissingPet } = require("../models");

const userData = require("./userData.json");
const missingPetData = require("./missingPetData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const missingPet of missingPetData) {
    await MissingPet.create({
      ...missingPet,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
