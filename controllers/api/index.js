const router = require("express").Router();
const userRoutes = require("./userRoutes");
const missingPetRoutes = require("./missingPetRoutes");

router.use("/users", userRoutes);
router.use("/newpost", missingPetRoutes);

module.exports = router;
