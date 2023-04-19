const express = require("express");
const router = express.Router();
const Package = require("../models/packageSchema");
const Gallery = require("../models/gallerySchema");
const {
  validateProduct,
  isLoggedIn,
  isSeller,
  isProductAuthor,
} = require("../middleware");

//route for getting all the packages page
router.get("/packages", async (req, res) => {
  try {
    let packages = await Package.find({});
    res.render("packages/packages", { packages });
  } catch (e) {
    res.status(500).render("error", { err: e.message });
  }
});

//to add a new package
router.get("/packages/new", (req, res) => {
  try {
    res.render("packages/new");
  } catch (e) {
    res.status(500).render("error", { err: e.message });
  }
});

//adding to Db
router.post(
  "/packages",
  isLoggedIn,
  isSeller,
  validateProduct,
  async (req, res) => {
    try {
      const { name, img, price, desc } = req.body;
      await Package.create({
        name,
        img,
        price: parseFloat(price),
        desc,
        author: req.user._id,
      });
      req.flash("success", "Successfully added a new Package!");
      res.redirect("/packages");
    } catch (e) {
      res.status(500).render("error", { err: e.message });
    }
  }
);

//for showing
router.get("/packages/:id", isLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;
    const package = await Package.findById(id).populate("reviews");
    res.render("packages/show", { package });
  } catch (e) {
    res.status(500).render("error", { err: e.message });
  }
});



//edit a package

router.get(
  "/packages/:id/edit",
  isLoggedIn,
  isProductAuthor,
  async (req, res) => {
    try {
      let { id } = req.params;
      let package = await Package.findById(id);
      res.render("packages/edit", { package });
    } catch (e) {
      res.status(500).render("error", { err: e.message });
    }
  }
);

//changes reflect to db
// changing the original edits in the database made in the editform
router.patch(
  "/packages/:id",
  isLoggedIn,
  isProductAuthor,
  validateProduct,
  async (req, res) => {
    try {
      let { id } = req.params;
      let { name, img, price, desc } = req.body;
      await Package.findByIdAndUpdate(id, { name, img, price, desc });
      req.flash("success", "Edit Your package Successfully");
      res.redirect(`/packages/${id}`);
    } catch (e) {
      res.status(500).render("error", { err: e.message });
    }
  }
);

//delete the package
router.delete(
  "/packages/:id",
  isLoggedIn,
  isProductAuthor,
  async (req, res) => {
    try {
      let { id } = req.params;
      await Package.findByIdAndDelete(id);
      res.redirect("/packages");
    } catch (e) {
      res.status(500).render("error", { err: e.message });
    }
  }
);
module.exports = router;
