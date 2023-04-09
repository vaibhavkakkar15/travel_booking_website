const { Mongoose, default: mongoose } = require("mongoose");

const reviewScheama = new mongoose.Schema(
  {
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

let Review = mongoose.model("Review", reviewScheama);

module.exports = Review;
