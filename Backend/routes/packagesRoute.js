const express = require("express");
const router = express.Router();
const Package = require("../models/packageSchema");

//route for getting all the packages page
router.get("/packages", async (req, res) => {
  let packages = await Package.find({});
  res.render("packages/packages", { packages });
});

//to add a new package
router.get("/packages/new", (req, res) => {
  res.render("packages/new");
});

module.exports = router;
