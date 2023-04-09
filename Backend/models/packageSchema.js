const { default: mongoose, trusted } = require("mongoose");

const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    require: true,
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
    default: null,
    required: true,
  },
  desc: {
    type: String,
    trim: true,
  },
  longDesc: {
    type: String,
    trim: true,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
});

let Package = mongoose.model("Package", packageSchema);
module.exports = Package;
