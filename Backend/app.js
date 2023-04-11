const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/userScheama");

const homeRoutes = require("./routes/homeRoutes");
const loginRoutes = require("./routes/loginRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const packageRoutes = require("./routes/packagesRoute");
const authRoutes = require("./routes/auth");
let methodOverride = require("method-override");

// const reviewRoutes = require("./routes/reviewRoutes");
const mongoose = require("mongoose");
const seedDB = require("./seed.js");
const seedDB2 = require("./seed2.js");
const port = 4000;

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//now for public method
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb://127.0.0.1:27017/travelBooking")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const sessionConfig = {
  secret: "weneedsomebettersecret",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy(User.authenticate()));

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

//seeding dummy data
// seedDB();
// seedDB2();
//using routes
app.use(homeRoutes);
// app.use(loginRoutes);
app.use(bookingRoutes);
app.use(packageRoutes);
app.use(authRoutes);
// app.use(reviewRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
