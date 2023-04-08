const mongoose = require("mongoose");
const Package = require("./models/packageSchema");

const packages = [
  {
    name: "Kedarnath",
    img: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: 9999,
    desc:"Kedarnath, situated in the northern region of India, is a town with a rich cultural and religious history. The town is home to the Kedarnath Temple, which is one of the twelve Jyotirlingas and holds immense significance for Hindus across the country.",
    longDesc: "Kedarnath is a town located in the Rudraprayag district of the northern Indian state of Uttarakhand. It is nestled in the Himalayan range at an altitude of about 3,583 meters (11,755 feet) above sea level and is surrounded by breathtaking mountain peaks and scenic landscapes.Kedarnath, situated in the northern region of India, is a town with a rich cultural and religious history. The town is home to the Kedarnath Temple, which is one of the twelve Jyotirlingas and holds immense significance for Hindus across the country. The temple, which is believed to have been built by the Pandavas during the Mahabharata era, attracts thousands of devotees every year who come to pay their respects to Lord Shiva.Apart from the temple, Kedarnath is also known for its picturesque landscapes and natural beauty. Surrounded by the majestic Himalayan peaks, the town is a popular destination for adventure enthusiasts and trekkers, with many trails leading to nearby peaks and glaciers. The Kedarnath Wildlife Sanctuary, which is home to a variety of flora and fauna, is also a major attraction for nature lovers and wildlife enthusiasts.The town of Kedarnath faced severe destruction in the 2013 Uttarakhand floods, which caused significant damage to the town and the surrounding region. However, with the help of the government and various organizations, the town has since been rebuilt and is once again welcoming pilgrims and tourists from across the world.In conclusion, Kedarnath is a town of immense cultural, religious, and natural significance. With its stunning landscapes, rich history, and spiritual importance, it continues to be a popular destination for travelers seeking a unique and fulfilling experience in India.",
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
    price: 7999,
    desc: "Manali is a picturesque hill station located in the Kullu district of the northern Indian state of Himachal Pradesh. It is situated in the heart of the Himalayas, and its breathtaking natural beauty and pleasant climate make it a popular destination for tourists from all over the world.",
  },
];

async function seedDB() {
  await Package.deleteMany();
  await Package.insertMany(packages);
  console.log("data seeded successfully");
}

module.exports = seedDB;
