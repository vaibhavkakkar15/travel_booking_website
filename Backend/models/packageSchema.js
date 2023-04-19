const { default: mongoose, trusted } = require("mongoose");
const Review = require("./reviewScheama");

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  img: {
    type: String,
    trim: true,
    default:
      "https://media.istockphoto.com/id/507210837/photo/website.jpg?s=612x612&w=is&k=20&c=Kq5IOUwq2oUnve-NpkS2hwR4MkHBugzqtnbl6phKAY0=",
  },
  price: {
    type: Number,
    min: 0,
    default: 0,
  },
  desc: {
    type: String,
    trim: true,
  },
  longDesc: {
    type: String,
    trim: true,
  },
  avgRating: {
    type: Number,
    default: 0,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

// Mongoose middleware function to delete all the associated reviews on a product
packageSchema.post("findOneAndDelete", async function (package) {
  if (package.reviews.length > 0) {
    await Review.deleteMany({ _id: { $in: package.reviews } });
  }
});

let Package = mongoose.model("Package", packageSchema);
module.exports = Package;
