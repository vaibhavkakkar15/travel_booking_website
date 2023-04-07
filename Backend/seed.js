const mongoose = require("mongoose");
const Package = require("./models/packageSchema");

const packages = [
  {
    name: "Kedarnath",
    img: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: 9999,
    desc: "Kedarnath is a town located in the Rudraprayag district of the northern Indian state of Uttarakhand. It is nestled in the Himalayan range at an altitude of about 3,583 meters (11,755 feet) above sea level and is surrounded by breathtaking mountain peaks and scenic landscapes",
  },
  {
    name: "RishiKesh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKRFXl5ZRsR1SyH5PyMh-JqRkwtTvp-9bgCQ&usqp=CAU",
    price: 4999,
    desc: "Rishikesh is a vibrant town located in the northern Indian state of Uttarakhand, nestled in the foothills of the Himalayas. The town is known for its serene and tranquil environment, making it a popular destination for spiritual seekers and yoga enthusiasts.",
  },
  {
    name: "Shimla",
    img: "https://images.unsplash.com/photo-1609948543911-7f01ff385be5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpbWxhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 7999,
    desc: "I assume you mean Shimla, which is a popular hill station located in the northern Indian state of Himachal Pradesh. Nestled in the foothills of the Himalayas, Shimla is known for its scenic beauty, colonial architecture, and pleasant weather. ",
  },
  {
    name: "Goa",
    img: "https://images.unsplash.com/photo-1587922546307-776227941871?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z29hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 19999,
    desc: "Goa is a coastal state located on the western coast of India, known for its beautiful beaches, rich history, and vibrant culture. It is the smallest state in India but attracts a large number of domestic and international tourists every year.",
  },
  {
    name: "Manali",
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuYWxpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price:  7999,
    desc: "Manali is a picturesque hill station located in the Kullu district of the northern Indian state of Himachal Pradesh. It is situated in the heart of the Himalayas, and its breathtaking natural beauty and pleasant climate make it a popular destination for tourists from all over the world.",
  },
];

async function seedDB() {
  await Package.deleteMany();
  await Package.insertMany(packages);
  console.log("data seeded successfully");
}

module.exports = seedDB;
