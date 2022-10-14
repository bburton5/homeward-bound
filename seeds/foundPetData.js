const { FoundPet } = require("../models");

const foundpetdata = [
  {
    animal_id: "A673661",
    animal_name: "Unknown",
    animal_type: "Dog",
    animal_age: "Unknown",
    animal_gender: "Unknown",
    animal_breed: "Great Pyrenees",
    animal_color: "Unknown",
    found_on: "2022-09-27",
    found_at: "222ND AND 98TH PL S",
    image:
      "https://petharbor.com/get_image.asp?RES=Detail&LOCATION=PUBLIC&ID=2501800",
    description:
      "2 dogs (they are definitely from the same place) were wandering my street this morning around 9:30am. They have no identification on them but the smaller one does have a pink and blue collar. Smaller dog is female, larger one is male. Both are very sweet and gentle.",
  },
];

const seedFoundPet = () => FoundPet.bulkCreate(foundpetdata);

module.exports = seedFoundPet;
