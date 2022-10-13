const path = require("path");
const express = require("express");

// Import express-session
const session = require("express-session");
const expressHandlebars = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: "Super secret secret",
  cookie: {
    // Stored in milliseconds
    maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(session(sess));
const handlebars = expressHandlebars.create();
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
