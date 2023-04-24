const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../middleware");
const Package = require("../models/packageSchema");
const User = require("../models/userScheama");

router.get("/user/cart", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.user._id).populate("cart");
  res.render("cart/cart", { user });
});

router.post("/user/:packageId/add", isLoggedIn, async (req, res) => {
  let { packageId } = req.params;
  let userId = req.user._id;
  let package = await Package.findById(packageId);
  let user = await User.findById(userId);
  user.cart.push(package);
  await user.save();
  res.redirect("/user/cart");
});

module.exports = router;
