const express = require("express");
const router = express.Router();
const Package = require("../models/packageSchema");
const Gallery = require("../models/gallerySchema");

//route for getting all the packages page
router.get("/packages", async (req, res) => {
  let packages = await Package.find({});
  res.render("packages/packages", { packages });
});

//to add a new package
router.get("/packages/new", (req, res) => {
  res.render("packages/new");
});

//adding to Db
router.post("/packages", async (req, res) => {
  let { name, img, price, desc, longDesc } = req.body;
  await Package.create({ name, img, price, desc, longDesc });
  res.redirect("/packages");
});

//show a particular package
//show the package
router.get("/packages/:id", async (req, res) => {
  const { id } = req.params;
  const package = await Package.findById(id);
  const gallery = await Gallery.findById(id);
  res.render("packages/show", { package, gallery });
});

//edit a package

router.get("/packages/:id/edit", async (req, res) => {
  let { id } = req.params;
  let foundPackage = await Package.findById(id);
  res.render("packages/edit", { foundPackage });
});

//changes reflect to db
// changing the original edits in the database made in the editform
router.patch("/packages/:id", async (req, res) => {
  let { id } = req.params;
  let { name, img, price, desc } = req.body;
  await Package.findByIdAndUpdate(id, { name, img, price, desc });
  res.redirect(`/packages/${id}`);
});

module.exports = router;
