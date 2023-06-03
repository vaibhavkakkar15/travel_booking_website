const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bodyParser = require("body-parser");
const User = require("./models/userScheama");

const PUBLISHABLE_KEY =
  "pk_live_51N2EGXSH2gJC4vNtPItwBNYqR8jRfjH1kadDUtvt4QI5IKwqJgPPQhnKVG9QOxJOnHqAXQ1JOjDLfsCWHngsvR9v00o962SxqA";
const SECRET_KEY =
  "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";
const stripe = require("stripe")(SECRET_KEY);

// This is your test secret API key.


const YOUR_DOMAIN = 'http://localhost:4000';



const homeRoutes = require("./routes/homeRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const packageRoutes = require("./routes/packagesRoute");
const authRoutes = require("./routes/auth");
const reviewRoutes = require("./routes/reviewRoutes");

let methodOverride = require("method-override");

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

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

// app.get("/", (req, res) => {
//   res.render("home/home.ejs", {
//     key: PUBLISHABLE_KEY,
//   });
// });

// app.post("/payment", (req, res) => {
//   stripe.customers
//     .create({
//       email: req.body.stripeEmail,
//       source: req.body.stripeToken,
//       name: "Vaibhav Kakkar",
//       address: {
//         line1: "#2 Phase I Part II",
//         postal_code: "152002",
//         city: "New Delhi",
//         country: "India",
//       },
//     })
//     .then((customer) => {
//       return stripe.charges.create({
//         amount: 7000,
//         description: "Product",
//         currency: "usd",
//         customer: customer.id,
//       });
//     })
//     .then((charge) => {
//       console.log(charge);
//       res.send("Success");
//     })
//     .catch((err) => {
//       res.send(err);
//     });
// });

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });
  
  res.redirect(303, session.url);
});

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
app.use(bookingRoutes);
app.use(packageRoutes);
app.use(authRoutes);
app.use(reviewRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
