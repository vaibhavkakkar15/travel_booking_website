const express = require("express");
const router = express.Router();
const User = require("../models/userScheama");
const passport = require("passport");
const { isLoggedIn } = require("../middleware");

router.get("/register", (req, res) => {
  res.render("auth/signup");
});

router.post("/register", async (req, res) => {
  try {
    let { email, username, password, role } = req.body;
    const user = new User({ email, username, role });
    const newUser = await User.register(user, password);
    req.login(newUser, function (err) {
      if (err) {
        return next(err);
      }
      req.flash("success", "welcome, you are registered successfully");
      return res.redirect("/packages");
    });
  } catch (e) {
    req.flash("error", e.message);
    return res.redirect("/packages");
  }
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureMessage: true,
  }),
  function (req, res) {
    // console.log(req.user);
    req.flash("success", `welcome back ${req.user.username}`);
    // console.log(req.session);
    res.redirect(`/packages`);
  }
);

router.get("/logout", (req, res) => {
  () => {
    console.log("logout krra hu");
    req.logout();
  };
  req.flash("success", "goodbye friend");
  res.redirect("/home");
});

module.exports = router;
