const router = require('express').Router();
const FoundPet = require('../models/FoundPet.js');
const MissingPet = require('../models/MissingPet.js');

// CREATE multiple books
router.post('/seed', (req, res) => {
    FoundPet.bulkCreate([
      {//1
        animal_name: None,
        animal_type: Dog,
        animal_age: Unknown,
        animal_gender: Unknown,
        animal_breed: Great_pyrenees,
        animal_color: Unknown,
        found_on: '09/27/2022',
        found_at: '222nd and 98th Pl S',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2501800',
        description: None,
      },

      { //2
        animal_name: None,
        animal_type: Cat,
        animal_age: 1,
        animal_gender: Male,
        animal_breed: American_Shorthair,
        animal_color: black,
        found_on: 10/01/2022,
        found_at: 'Talbot and Benson Hill',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2504583',
        description: 'All black male polydactyl cat',
      },

      {//3
        animal_name: Tabitha,
        animal_type: Dog,
        animal_age: 1,
        animal_gender: Male,
        animal_breed: Vizsla,
        animal_color: Red/sable,
        found_on: 09/16/2022,
        found_at: '175th NE and 163rd Pl.',
        image: 'https://petharbor.com/get_image.asp?RES=Detail&LOCATION=PUBLIC&ID=2497853',
        description: 'Approximately 2-year old Vizsla/Hound. Red/sable color.',
      },

      {//4
        animal_name: None,
        animal_type: Dog,
        animal_age: Unknown,
        animal_gender: Male,
        animal_breed: 'Yorkshire Terrier',
        animal_color: brown_eyes,
        found_on: 10/17/2022,
        found_at: '2nd ave N and Cole St',
        image: none,
        description: 'About 10 lbs',
      },
     {//5
      animal_name: Unknown,
      animal_type: Dog,
      animal_age: 1,
      animal_gender: Female,
      animal_breed: Havanese,
      animal_color: Black,
      found_on: 09/08/2022,
      found_at: 9844 S 262bd PL.,
      image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2494676',
      description: 'Black/brown, white patch on chest. Long curly hair.',
    },

   {//6
    animal_name: Unknown,
    animal_type: Dog,
    animal_age: Unknown ,
    animal_gender: Male,
    animal_breed: Pit_Bull,
    animal_color: ABlack,
    found_on: 09/06/2022,
    found_at: '64th Ave S and S 216th St.',
    image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2501627',
    description: 'Black dog, white spots on hind paws, wearing a bandana and a small collar (no contact information).',
   },
    {//7
      animal_name: Chichi,
      animal_type: Dog,
      animal_age: 1,
      animal_gender: Female,
      animal_breed: Chihuahua,
      animal_color: Black,
      found_on: 10/06/2022,
      found_at: '43rd PL S and S 262nt St',
      image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2505901',
      description: ' Black, gray hair around the eyes, short tail.',
    },

    {//8
      animal_name: Unknown,
      animal_type: Dog,
      animal_age: Unknown,
      animal_gender: Male,
      animal_breed: Labrador_Retriever,
      animal_color: Black,
      found_on: 09/26/2022,
      found_at: '116th Ave and Des Moines Memorial Drive South.',
      image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2502489',
      description: 'Black labrador mix with white markings on face and feet, No Identification tag, no microchip, has flea infestation and fur is very dirty.',
    },

    {//9
      animal_name: Jaxson,
      animal_type: Cat,
      animal_age: 1,
      animal_gender: Male,
      animal_breed: Domestic_Mediumhair,
      animal_color: Black,
      found_on: 10/17/2022.,
      found_at: '21204 125 th Ave SE.',
      image: none,
      description: 'Black male cat.',
    },

    {//10
      animal_name: Unknown,
      animal_type: Cat,
      animal_age: 1,
      animal_gender: Female,
      animal_breed: American_Shorthair,
      animal_color: Unknown,
      found_on: 10/30/2022.,
      found_at: 'Lawson and Black Diamond.',
      image: none,
      description: 'Dark Gray and White very lovable. Showed up about a month ago.',
    },

    {//11
      animal_name: Unknown,
      animal_type: Dog,
      animal_age: Unknown,
      animal_gender: Female,
      animal_breed: Labrador_Retriever,
      animal_color: Brown,
      found_on: 10/12/2022,
      found_at: 'Dash point and 44th Ave sw.',
      image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2508009',
      description: 'slender tall very short hair. She has a harness and leash and was left at Dumas bay with some food in a wire crate (Aspen brand ).',
    },

    ])

     MissingPet.bulkCreate([
     {//1
      pet_name: Nyla,
      pet_type: cat,
      description: 'has a ticked coat on body, strips on legs and tail. ',
      image: 'https://petharbor.com/get_image.asp?RES=Detail&LOCATION=PUBLIC&ID=2501953',
      zip_code: 98188,
      date_lost: 09/14/2022,
      contact_number: none,
      },

      {//2
        pet_name: Ginger,
        pet_type: Dog,
        description: '10 year old Chihauha.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2507377',
        zip_code: none,
        date_lost: 09/14/2022,
        contact_number: none,
      },

      {//3
        pet_name: 'Fe Schner',
        pet_type: Cat,
        description: '1.5 yr old, 11 lb tuxedo cat w/ distinct face markings, yellow eyes, 4 white feet w/ black toe beans, & 3/4 length kinked tail. Sweet & friendly, but may be skittish. Dark green leather collar with small gold name tag & black bell. Answers to “Roo-mee” or “buddy.” He is neutered, fully vaccinated, and microchipped.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2506196',
        zip_code: 98188,
        date_lost: 10/05/2022,
        contact_number: none,
      },

      {//4
        pet_name: Rumi,
        pet_type: Cat,
        description: '1.5 yr old, 11 lb tuxedo cat w/ distinct face markings, yellow eyes, 4 white feet w/ black toe beans, & 3/4 length crooked tail. Sweet & friendly, but may be skittish. ',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2506047',
        zip_code: none,
        date_lost: 10/05/2022,
        contact_number: none,
      },

      {//5
        pet_name: Rumi,
        pet_type: Cat,
        description: '1.5 yr old neutered male, 11 lb tuxedo shorthair, mostly black w/ white chest, tummy, & socks, all black toe beans. White muzzle (w/ black splotch on right (his left) side that looks like Texas), black nose & chin, yellow eyes, 3/4 length kinked tail broken in 4 spots.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2510064',
        zip_code: none,
        date_lost: 10/05/2022,
        contact_number: none,
      },

      {//6
        pet_name: Caleb,
        pet_type: Dog,
        description: '1 year old yellow lab with a regular and training collar on.',
        image: 'https://petharbor.com/get_image.asp?RES=Detail&LOCATION=PUBLIC&ID=2509786',
        zip_code: 98042,
        date_lost: 10/08/2022,
        contact_number: none,
      },

      {//7
        pet_name: Mabel,
        pet_type: Cat,
        description: '2 year old female, tabby cat. With a crooked tail.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2494611',
        zip_code: 98038,
        date_lost: 09/14/2022,
        contact_number: none,
      },

      {//8
        pet_name: Lucca,
        pet_type: Cat,
        description: '2 yes old non neutered male green eyes grey with striped just like Hemingway cats Lucca.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2509575',
        zip_code: none,
        date_lost: 09/14/2022,
        contact_number: none,
      },

      /*{//9
        pet_name: Bubby,
        pet_type: Tortoise,
        description: ' 50+LB SULCATA TORTOISE - SIZE OF A LARGE WATERMELON.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2497426',
        zip_code: 98188,
        date_lost: 09/15/2022,
        contact_number: none,
      },*/

      {//10
        pet_name: Janks,
        pet_type: Cat,
        description: '9year old male black cat with a spot of white on his chest.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2494231',
        zip_code: 98188,
        date_lost: 09/04/2022,
        contact_number: none,
      },

      {//11
        pet_name: Malcolm,
        pet_type: Cat,
        description: 'All black cat with orange-yellow eyes. May have a few white hairs on his chest but not all the time. Fully clawed. Microchipped.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2509070',
        zip_code: 98188,
        date_lost: 10/13/2022,
        contact_number: none,
      },

      {//12
        pet_name: Spin,
        pet_type: Cat,
        description: 'All white with amber eyes and a pink nose.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2494563',
        zip_code: none,
        date_lost: 09/06/2022,
        contact_number: none,
      },

      /*{//13
        pet_name: Baby,
        pet_type: Bird,
        description: ' Baby is a male cockatiel. Mostly Grey with white and yellow. Orange cheeks. Slightly crooked wing. Right nostril Slightly larger then left.',
        image: none,
        zip_code: 98188,
        date_lost: 10/11/2022,
        contact_number: none,
      },*/

      {//14
        pet_name: Snowball,
        pet_type: Cat,
        description: 'Beautiful black female cat, shiny coat, yellow eyes.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2505307',
        zip_code: 98075,
        date_lost: 10/11/2022,
        contact_number: none,
      },

      {//15
        pet_name: Bebe,
        pet_type: Cat,
        description: 'BeBe is a very small charcoal/grey and black tabby. She has some lighter coloring in her face and black toes. Sleek shoes coat.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2500997',
        zip_code: 98075,
        date_lost: 10/03/2022,
        contact_number: none,
      },

      {//16
        pet_name: Tommy,
        pet_type: Cat,
        description: 'Black and white 3 y/o neutered Male, microchipped no collar, tall, lean, shy, but friendly. Comes to a bell for food. A quarter of his face is white and the rest is black.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2494532',
        zip_code: 98006,
        date_lost: 09/06/2022,
        contact_number: none,
      },

      {//17
        pet_name: Tim,
        pet_type: Cat,
        description: 'Black and white shorthair, male. Has black mustache on face',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2502107',
        zip_code: 98188,
        date_lost: 09/26/2022,
        contact_number: none,
      },

      {//18
        pet_name: Amos_Moses,
        pet_type: Cat,
        description: 'lack cat, coat looks red/brown in the sun. Weighs about 17 pounds. Distinctive blue/green eyes. Long, bushy tail.',
        image: none,
        zip_code: none,
        date_lost: 09/23/2022,
        contact_number: none,
      },

      {//19
        pet_name: Pickles,
        pet_type: Cat,
        description: 'Black and whit with a distinct meow. Fixed belly hanging weighs more than she looks.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2494609',
        zip_code: none,
        date_lost: 09/07/2022,
        contact_number: none,
      },

      {//20
        pet_name: Luna,
        pet_type: Cat,
        description: 'Black cat with a long white V on his chest and a white patch on his belly and he has yellow eyes.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2497723',
        zip_code: none,
        date_lost: 09/17/2022,
        contact_number: none,
      },

      {//21
        pet_name: Nino,
        pet_type: Cat,
        description: 'Black domestic short hair, male, neutered, yellow eyes, missing a front bottom K9 tooth, has a few white hairs on his chest. He was wearing a neon green reflective collar with some tags on it. He is an indoor/outdoor cat but not from the area he was lost. Responds to being called baby. He is about 6 years old.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2501475',
        zip_code: none,
        date_lost: 09/19/2022,
        contact_number: none,
      },

      {//22
        pet_name: Jack,
        pet_type: Cat,
        description: 'Black face, black ears , black legs and paws, long black bushy tail, Cream, tan and gray on his body, Big Bright Blue eyes, Jack is shy',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2504248',
        zip_code: none,
        date_lost: 09/25/2022,
        contact_number: none,
      },

      {//23
        pet_name: Luna,
        pet_type: Cat,
        description: 'Black female cat, 4.5 years old and about 16 pounds. She is spayed and microchipped. She has medium/short hair and is all black except for a white spot on her chest and a white "bikini" on her belly.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2503021',
        zip_code: 98168,
        date_lost: 09/29/2022,
        contact_number: none,
      },

      {//24
        pet_name: Zoey,
        pet_type: Dog,
        description: 'Black German Shepard with a white patch on her chest she won’t have a collar on it was left home.        ',
        image: none,
        zip_code: none,
        date_lost: 10/18/2022,
        contact_number: none,
      },

      {//25
        pet_name: Poppy,
        pet_type: Cat,
        description: 'Black, grey, and orange tabby. She has an orange spot on her head. Wears a pink collar.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2506284',
        zip_code: none,
        date_lost: 09/129/2022,
        contact_number: none,
      },

      {//26
        pet_name: Jaxson,
        pet_type: Cat,
        description: 'Black male cat. 6.5 years old.',
        image: none,
        zip_code: 98030,
        date_lost: 10/17/2022,
        contact_number: none,
      },

      {//27
        pet_name: Peepers,
        pet_type: Dog,
        description: 'Blue eyes, black tri color.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2497311',
        zip_code: 98188,
        date_lost: 09/14/2022,
        contact_number: none,
      },

      {//28
        pet_name: Blue,
        pet_type: Dog,
        description: 'Blue is a blue heeler, 50-60lbs, green collar, not microchipped but responds to his name, very friendly - last scene at or around Kent Public Library. He is approximately 2 years old. White with black spots, looks like a dalmatian.',
        image: none,
        zip_code: 98188,
        date_lost: 09/11/2022,
        contact_number: none,
      },

      {//29
        pet_name: Bolita,
        pet_type: Dog,
        description: 'Bolita is a toy poodle white coat , about 15lbs. She’s easily frighten by people. Friendly and playful.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2509984',
        zip_code: 981002,
        date_lost: 10/12/2022,
        contact_number: none,
      },

      {//30
        pet_name: Duke,
        pet_type: Dog,
        description: 'Brindle Blue nose pit, German shepherd, Akita mix. Male-neutered, 5yrs old. ',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2501391',
        zip_code: none,
        date_lost: 09/26/2022,
        contact_number: none,
      },

      {//31
        pet_name: Nora,
        pet_type: Dog,
        description: 'Brown 10 pounds, shy and fast.',
        image: none,
        zip_code: 98019,
        date_lost: 10/09/2022,
        contact_number: none,
      },

      {//32
        pet_name: Penelope,
        pet_type: Dog,
        description: 'Brown and black Chihuahua/miniature pinscher mix. Around 9 pounds. Very anxious. Some white hairs on her back.',
        image: none,
        zip_code: 98042,
        date_lost: 09/22/2022,
        contact_number: none,
      },

      {//33
        pet_name: Brandon,
        pet_type: Cat,
        description: 'Brown and gray striped tabby with white paws.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2507069',
        zip_code: 98005,
        date_lost: 10/04/2022,
        contact_number: none,
      },

      {//34
        pet_name: Groot,
        pet_type: Dog,
        description: 'Brown small.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2510521',
        zip_code: 98188,
        date_lost: 10/15/2022,
        contact_number: none,
      },

      {//35
        pet_name: Unknown,
        pet_type: Cat,
        description: 'Brown tabby cat. Shes pretty shy but is easy to get along with',        
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2507313',
        zip_code: none,
        date_lost: 10/09/2022,
        contact_number: none,
      },

      {//36
        pet_name: Sybill,
        pet_type: Cat,
        description: 'Brown tabby with white chest and mostly white belly, white paws with more white on the hind legs. Patch of belly is currently shaved.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2500628',
        zip_code: 98030,
        date_lost: 09/23/2022,
        contact_number: none,
      },

      {//37
        pet_name: '',
        pet_type: '',
        description: '.',
        image: '',
        zip_code: 98188,
        date_lost: 09/14/2022,
        contact_number: none,
      },

      {//38
        pet_name: Lucy,
        pet_type: Cat,
        description: 'Brown with stripes',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2501624',
        zip_code: 98040,
        date_lost: 09/24/2022,
        contact_number: none,
      },

      {//39
        pet_name: Cascade,
        pet_type: Dog,
        description: 'Cascade is a husky mix. Black and white long coat wearing a green collar, no tags.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2507985',
        zip_code: 98188,
        date_lost: 10/11/2022,
        contact_number: none,
      },

      {//40
        pet_name: Aspen,
        pet_type: Cat,
        description: 'Charcoal gray cat with yellow eyes and blue collar with a bell.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2505814',
        zip_code: none,
        date_lost: 10/06/2022,
        contact_number: none,
      },

      {//41
        pet_name: Nacho,
        pet_type: Dog,
        description: 'Chihuahua, Corgie, Pomeranian Mix.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2510103',
        zip_code: none,
        date_lost: 09/18/2022,
        contact_number: none,
      },

      {//42
        pet_name: Lexi,
        pet_type: Dog,
        description: 'Chocolate Australian labradoodle. 25 lbs with some white streaks. Chipped with blue scar on belly. Neutered',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2501617',
        zip_code: none,
        date_lost: 09/26/2022,
        contact_number: none,
      },

      {//43
        pet_name: Chorles,
        pet_type: Cat,
        description: 'Chorles is a small 1 year old spayed female Bombay with shiny black short fur with a tiny bit of white on the tummy.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2504993',
        zip_code: 98042,
        date_lost: 09/24/2022,
        contact_number: none,
      },

      {//44
        pet_name: Happy,
        pet_type: Cat,
        description: 'Chubby gray and white tuxedo. White cheeks, right tipped ear from spay. Two dark spots on right side of pink/white nose. All white boots, white bib and belly.',
        image: 'https://petharbor.com/PublicDetail.asp?searchtype=PUBFOUND&view=sysadm.v_animal&shelterlist=%27KING%27&where=type&ID=2506862',
        zip_code: 98168,
        date_lost: 10/08/2022,
        contact_number: none,
      },
        ])
    })