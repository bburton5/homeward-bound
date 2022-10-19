const router = require("express").Router();
const { MissingPet } = require("../../models");
const emoji = require("node-emoji");

router.post("/", async (req, res) => {
  try {
<<<<<<< HEAD
    console.log("in try");
    const missingPetData = await MissingPet.create ({
=======
    const missingPetData = await MissingPet.create({
>>>>>>> ae83725836a6affa704e38176f4c395cc78a68c0
      pet_name: req.body.pet_name,
      pet_type: req.body.pet_type,
      description: req.body.description,
      zip_code: req.body.zip_code,
      date_lost: req.body.date_lost,
      contact_number: req.body.contact_number,
    });
    res.status(200).json(missingPetData);
    console.log(
      "You have successfully accessed the Missing Pet POST route!",
      emoji.get("heart_eyes")
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET all MissingPet
router.get("/", async (req, res) => {
  try {
    // Search the database for all
    const allMissingPets = await MissingPet.findAll();

    res.json(allMissingPets);
    console.log(
      "You have successfully accessed the Missing Pet GET route!",
      emoji.get("heart_eyes")
    );
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
