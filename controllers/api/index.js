const router = require('express').Router();

const userRoutes = require('./user-routes');
const missingPet = require('./missingPet-routes');

router.use('/User', userRoutes);
router.use('/newpost', missingPet);


module.exports = router;
