const mongoose = require("mongoose");
const Package = require("./models/packageSchema");

const packages = [
  {
    name: "Kedarnath",
    img: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    price: 9999,
    desc: "Kedarnath, situated in the northern region of India, is a town with a rich cultural and religious history. The town is home to the Kedarnath Temple, which is one of the twelve Jyotirlingas and holds immense significance for Hindus across the country.",
    longDesc:
      "Kedarnath is a town located in the Rudraprayag district of the northern Indian state of Uttarakhand. It is nestled in the Himalayan range at an altitude of about 3,583 meters (11,755 feet) above sea level and is surrounded by breathtaking mountain peaks and scenic landscapes.Kedarnath, situated in the northern region of India, is a town with a rich cultural and religious history. The town is home to the Kedarnath Temple, which is one of the twelve Jyotirlingas and holds immense significance for Hindus across the country. The temple, which is believed to have been built by the Pandavas during the Mahabharata era, attracts thousands of devotees every year who come to pay their respects to Lord Shiva.Apart from the temple, Kedarnath is also known for its picturesque landscapes and natural beauty. Surrounded by the majestic Himalayan peaks, the town is a popular destination for adventure enthusiasts and trekkers, with many trails leading to nearby peaks and glaciers. The Kedarnath Wildlife Sanctuary, which is home to a variety of flora and fauna, is also a major attraction for nature lovers and wildlife enthusiasts.The town of Kedarnath faced severe destruction in the 2013 Uttarakhand floods, which caused significant damage to the town and the surrounding region. However, with the help of the government and various organizations, the town has since been rebuilt and is once again welcoming pilgrims and tourists from across the world.In conclusion, Kedarnath is a town of immense cultural, religious, and natural significance. With its stunning landscapes, rich history, and spiritual importance, it continues to be a popular destination for travelers seeking a unique and fulfilling experience in India.",
  },
  {
    name: "RishiKesh",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKRFXl5ZRsR1SyH5PyMh-JqRkwtTvp-9bgCQ&usqp=CAU",
    price: 4999,
    desc: "Rishikesh is a vibrant town located in the northern Indian state of Uttarakhand, nestled in the foothills of the Himalayas. The town is known for its serene and tranquil environment, making it a popular destination for spiritual seekers and yoga enthusiasts.",
    longDesc:
      "Rishikesh, a small town situated in the northern state of Uttarakhand in India, is a hub for adventure enthusiasts and spiritual seekers alike. Known as the `Yoga Capital of the World`, Rishikesh offers a range of adventure activities including white water rafting, bungee jumping, zip-lining, kayaking, and more. There are plenty of adventure stays available for tourists, ranging from luxurious resorts to budget-friendly campsites, which provide an immersive experience of nature and adventure sports. Whether you are seeking adventure, relaxation, or spiritual enlightenment, Rishikesh is a must-visit destination that offers something for everyone.",
  },
  {
    name: "Shimla",
    img: "https://images.unsplash.com/photo-1609948543911-7f01ff385be5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpbWxhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 7999,
    desc: "I assume you mean Shimla, which is a popular hill station located in the northern Indian state of Himachal Pradesh. Nestled in the foothills of the Himalayas, Shimla is known for its scenic beauty, colonial architecture, and pleasant weather. ",
    longDesc:
      "Shimla, the capital city of the northern Indian state of Himachal Pradesh, is a popular hill station that offers a perfect blend of adventure, nature, and history. Nestled in the lap of the Himalayas, Shimla is a paradise for adventure seekers with trekking, camping, rock climbing, mountain biking, and skiing being some of the popular activities. The city also boasts of a rich colonial heritage, evident in its architecture, museums, and churches. There are numerous adventure stays available in Shimla, ranging from cozy homestays to luxury resorts, that offer a breathtaking view of the Himalayas and a chance to immerse in the local culture. Whether you are an adventure enthusiast or a history buff, Shimla is a destination that offers a perfect mix of adventure, culture, and relaxation.",
  },
  {
    name: "Goa",
    img: "https://images.unsplash.com/photo-1587922546307-776227941871?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z29hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 19999,
    desc: "Goa is a coastal state located on the western coast of India, known for its beautiful beaches, rich history, and vibrant culture. It is the smallest state in India but attracts a large number of domestic and international tourists every year.",
    longDesc:
      "Goa, a coastal state situated on the western coast of India, is known for its sandy beaches, vibrant nightlife, and adventure activities. The state offers a range of adventure activities including scuba diving, parasailing, jet skiing, kayaking, and more. With its diverse range of beachfront adventure stays, from luxury resorts to budget-friendly guesthouses, tourists can experience the perfect mix of relaxation and adventure. Goa is also rich in culture and heritage, with a Portuguese influence evident in its architecture, cuisine, and lifestyle. Whether you're looking for an adrenaline-fueled adventure or a peaceful retreat, Goa is a destination that has something to offer for everyone.",
  },
  {
    name: "Manali",
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuYWxpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 7999,
    desc: "Manali is a picturesque hill station located in the Kullu district of the northern Indian state of Himachal Pradesh. It is situated in the heart of the Himalayas, and its breathtaking natural beauty and pleasant climate make it a popular destination for tourists from all over the world.",
    longDesc:
      "Manali, a charming hill station situated in the northern Indian state of Himachal Pradesh, is a popular destination for adventure enthusiasts and nature lovers. The town offers a range of adventure activities including trekking, paragliding, river rafting, skiing, and more. The scenic beauty of Manali with snow-capped mountains, lush green valleys, and cascading waterfalls, coupled with its pleasant weather throughout the year, makes it a perfect destination for adventure stays. There are a variety of adventure stays available in Manali, ranging from luxurious resorts to budget-friendly cottages, that offer stunning views of the surrounding mountains and a chance to explore the local culture. Whether you're an adventure enthusiast or seeking a peaceful retreat amidst nature, Manali is a destination that promises an unforgettable experience.",
  },
];

async function seedDB() {
  await Package.deleteMany();
  await Package.insertMany(packages);
  console.log("data seeded successfully");
}

module.exports = seedDB;
