const express = require("express");
const router = express.Router();
const Package = require("../models/packageSchema");
//display Home page
router.get("/home", async (req, res) => {
  let packages = await Package.find({});
  res.render("home/index.ejs", { packages });
});

//show the package
router.get("/home/:id", async (req, res) => {
  const { id } = req.params;
  const package = await Package.findById(id);
  res.render("home/show", { package });
});

//route for getting all the packages page
router.get("/packages", async (req, res) => {
  let packages = await Package.find({});
  res.render("pk/packages.ejs", { packages });
});

module.exports = router;
