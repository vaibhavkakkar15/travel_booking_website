const express = require("express");
const router = express.Router();
const Package = require("../models/packageSchema");
const Review = require("../models/reviewScheama");
const { validateReview } = require("../middleware");

router.post("/packages/:packageId/review", validateReview, async (req, res) => {
  try {
    const { packageId } = req.params;
    const { rating, comment } = req.body;

    const package = await Package.findById(packageId);

    const review = new Review({ rating, comment });

    // Average Rating Logic
    const newAverageRating =
      (package.avgRating * package.reviews.length + parseInt(rating)) /
      (package.reviews.length + 1);
    package.avgRating = parseFloat(newAverageRating.toFixed(1));

    package.reviews.push(review);

    await review.save();
    await package.save();

    req.flash("success", "Added your review successfully!");
    res.redirect(`/packages/${packageId}`);
  } catch (e) {
    res.status(500).render("error", { err: e.message });
  }
});

module.exports = router;
