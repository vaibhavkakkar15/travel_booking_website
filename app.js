const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const homeRoutes = require("./routes/homeRoutes");
const mongoose = require("mongoose");
const seedDB = require("./seed.js");
const port = 4000;

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//now for public method
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

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

//using routes
app.use(homeRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
