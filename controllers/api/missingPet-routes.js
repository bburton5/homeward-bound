const router = require('express').Router();
const { MissingPet } = require('../../models/MissingPet');

router.post('/newpost', async (req, res) => {
  try {
    const missingPetData = await MissingPet.create ({
      pet_name: req.body.pet_name,
      pet_type: req.body.pet_type,
      description: req.body.description,
      image: req.body.image,
      zip_code: req.body.zip_code,
      date_lost: req.body.date_lost,
      contact_number: req.body.contact_number,
    });
    console.log(missingPet,"in the try");
  } catch (err){
    res.status(500).json(err);
  }
  console.log(missingPet,"out the try");
}); 

module.exports = router;