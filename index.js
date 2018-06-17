const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");

// import dev or production config keys depending on environment
const keys = require("./config/keys");
// import User and Survey models
require("./models/User");
require("./models/Survey");
// import passport configuration
require("./services/passport");

// connect mongoose to database on mlab
mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

// setup cookie session that lasts for one month
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// initialize and use passport
app.use(passport.initialize());
app.use(passport.session());

// import logic handling all http endpoints
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
