const express = require("express");
const router = express.Router();
// const back = require("../public/videos/back.mp4");
//display Home page
router.get("/home", async (req, res) => {
  res.render("home/index.ejs");
});

module.exports = router;
