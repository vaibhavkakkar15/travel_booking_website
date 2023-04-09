const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const homeRoutes = require("./routes/homeRoutes");
const loginRoutes = require("./routes/loginRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const packageRoutes = require("./routes/packagesRoute");
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

//seeding dummy data
// seedDB();
// seedDB2();
//using routes
app.use(homeRoutes);
app.use(loginRoutes);
app.use(bookingRoutes);
app.use(packageRoutes);
// app.use(reviewRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
