const { default: mongoose } = require("mongoose");

const galleryScheama = new mongoose.Schema({
  img1: {
    type: String,
    trim: true,
    default:
      "https://media.istockphoto.com/id/507210837/photo/website.jpg?s=612x612&w=is&k=20&c=Kq5IOUwq2oUnve-NpkS2hwR4MkHBugzqtnbl6phKAY0=",
  },
  img2: {
    type: String,
    trim: true,
    default:
      "https://media.istockphoto.com/id/507210837/photo/website.jpg?s=612x612&w=is&k=20&c=Kq5IOUwq2oUnve-NpkS2hwR4MkHBugzqtnbl6phKAY0=",
  },
  img3: {
    type: String,
    trim: true,
    default:
      "https://media.istockphoto.com/id/507210837/photo/website.jpg?s=612x612&w=is&k=20&c=Kq5IOUwq2oUnve-NpkS2hwR4MkHBugzqtnbl6phKAY0=",
  },
});

let Gallery = mongoose.model("Gallery",galleryScheama);
module.exports = Gallery;
