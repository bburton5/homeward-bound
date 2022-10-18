const router = require("express").Router();
const { MissingPet } = require("../../models");

router.post("/", async (req, res) => {
  console.log("in the new post");
  try {
    console.log("in try");
    const missingPetData = await MissingPet.create({
      ...req.body,
    });
    console.log(missingPetData, "about to exit the try");
    res.status(200).json(missingPetData);
  } catch (err) {
    res.status(500).json(err);
    console.log("you are in the catch");
  }
});

module.exports = router;
