const router = require("express").Router();
const { User } = require("../../models");
const { MissingPet } = require("../../models/MissingPet");
const emoji = require("node-emoji");

// CREATE new user
router.post("/", async (req, res) => {
  try {
    const dbUserData = await User.create(req.body);
    req.session.save(() => {
      (username = req.body.username),
        (email = req.body.email),
        (password = req.body.password);
    });
    console.log("User has successfully signed up!", emoji.get("dog"));
  } catch (err) {
    console.log(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res.status(400).json({ message: "Incorrect email. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
    console.log("User has successfully logged in!", emoji.get("cat"));
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
    console.log("User has successfully logged out!", emoji.get("frog"));
  } else {
    res.status(404).end();
  }
});

module.exports = router;
