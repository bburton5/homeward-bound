const { MissingPet } = require("../models");

const missingpetdata = [
  {
    pet_name: "Nyla",
    pet_type: "Cat",
    description:
      " 10 year old Abyssinian/tabby mix. She has a ticked coat on body, strips on legs and tail. With 'necklace' stripe. Red collar. Chipped",
    image:
      "https://petharbor.com/get_image.asp?RES=Detail&LOCATION=PUBLIC&ID=2501953",
    zip_code: "98188",
    date_lost: "2022-09-14",
    contact: "1234567890",
  },
];

const seedMissingPet = () => MissingPet.bulkCreate(missingpetdata);

module.exports = seedMissingPet;
