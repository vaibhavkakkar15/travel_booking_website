const { default: mongoose } = require("mongoose");

const Gallery = require("./models/gallerySchema");

const gallery = [
  {
    img1: "https://wallpapers.com/images/featured/9pd6c84fjldyenjg.jpg",

    img2: "https://e0.pxfuel.com/wallpapers/269/227/desktop-wallpaper-kedarnath-temple.jpg",

    img3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJCWDb1IsN3Lp70pptvqCxPkrMTXNBIwCyg&usqp=CAU",
  },
];

async function seedDB2() {
  await Gallery.deleteMany();
  await Gallery.insertMany(gallery);
  console.log("data seeded successfully");
}

module.exports = seedDB2;
