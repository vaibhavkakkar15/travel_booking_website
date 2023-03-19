const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const homeRoutes = require("./routes/homeRoutes");
const port = 3000;

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//now for public method
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

//using routes
app.use(homeRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
