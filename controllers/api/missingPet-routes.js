const router = require('express').Router();
const { MissingPet } = require('../../models');

router.post('/', async (req, res) => {
<<<<<<< HEAD
  console.log("in the new post");
=======
>>>>>>> 01d47ed303b34e242b20cb0b08df2abc4fb73d3b
  try {
    console.log("in try");
    const missingPetData = await MissingPet.create ({
      pet_name: req.body.pet_name,
      pet_type: req.body.pet_type,
      description: req.body.description,
      zip_code: req.body.zip_code,
      date_lost: req.body.date_lost,
      contact_number: req.body.contact_number,
<<<<<<< HEAD
    });
    console.log(missingPetData,"in the try");
  } catch (err){
    res.status(500).json(err);
  }
  console.log(missingPetData,"out the try");
=======
    })
    res.status(200).json(missingPetData)
  } catch (err){
    res.status(500).json(err);
  }
>>>>>>> 01d47ed303b34e242b20cb0b08df2abc4fb73d3b
}); 


//GET all MissingPet
router.get('/', async (req, res) => {
  try {
  // Search the database for all 
  const allMissingPets = await MissingPet.findAll()

  res.json(allMissingPets);
  } catch (err) {
      res.status(500).json(err);
  }
});



module.exports = router;