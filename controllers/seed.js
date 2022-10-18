const router = require('express').Router();
const FoundPet = require('../models/FoundPet.js');
const MissingPet = require('../models/MissingPet.js');

// CREATE multiple books
router.post('/seed', (req, res) => {
    FoundPet.bulkCreate([
      {//1
        animal_name: 'Nyla',
        animal_type: 'Peter Brown',
        animal_age: A ,
        animal_gender: A,
        animal_breed: A,
        animal_color: A,
        found_on: A,
        found_at: A,
        image: 336,
        description: A,
      },

      { //2
        animal_name: 'Nyla',
        animal_type: 'Peter Brown',
        animal_age: A ,
        animal_gender: A,
        animal_breed: A,
        animal_color: A,
        found_on: A,
        found_at: A,
        image: 336,
        description: A,
      },

      {//3
        animal_name: 'Nyla',
        animal_type: 'Peter Brown',
        animal_age: A ,
        animal_gender: A,
        animal_breed: A,
        animal_color: A,
        found_on: A,
        found_at: A,
        image: 336,
        description: A,
      },


    ])

     MissingPet.bulkCreate([
     {
        pet_name: 'Nyla',
        pet_type: 'Peter Brown',
        description: '978-0674729018',
        image: 336,
        zip_code: 1,
        date_lost: false,
        contact_number: A,
        },
        ])
    })