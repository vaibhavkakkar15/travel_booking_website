const express = require("express");
const Package = require("../models/packageScheama");
const Review = require("../models/reviewScheama");
const router = express.Router();

router.post("/packages/:id/review", async (req, res) => {
  let { id } = req.params;
  let { rating, comment } = req.body;
  const package = await Package.findById(id);
  const review = new Review({ rating, comment });
  //adding review to package array
  package.reviews.push(review);
  await review.save();
  await product.save();
  res.redirect(`/packages/${id}`);
});

module.exports = router;
