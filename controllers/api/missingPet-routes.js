const router = require('express').Router();
const { MissingPet } = require('../../models/MissingPet');

router.post('/', async (req, res) => {
  console.log("in the new post");
  try {
    console.log("in try");
    const missingPetData = await MissingPet.create ({
      pet_name: req.body.pet_name,
      pet_type: req.body.pet_type,
      description: req.body.description,
      image: req.body.image,
      zip_code: req.body.zip_code,
      date_lost: req.body.date_lost,
      contact_number: req.body.contact_number,
    });
    console.log(missingPetData,"in the try");
  } catch (err){
    res.status(500).json(err);
  }
  console.log(missingPetData,"out the try");
}); 

module.exports = router;