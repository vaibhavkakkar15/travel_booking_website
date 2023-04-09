const express = require("express");
const router = express.Router();
const Package = require("../models/packageSchema");
const Gallery = require("../models/gallerySchema");
//display Home page
router.get("/home", async (req, res) => {
  let packages = await Package.find({});
  res.render("home/index.ejs", { packages });
});

//show the package
router.get("/home/:id", async (req, res) => {
  const { id } = req.params;
  const package = await Package.findById(id);
  const gallery = await Gallery.findById(id);
  res.render("packages/show", { package ,gallery});
});




module.exports = router;
