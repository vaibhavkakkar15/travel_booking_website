const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingScheama");

router.post("/booking", async (req, res) => {
  try {
    const booking = new Booking({
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      persons: req.body.persons,
      bookingDate: req.body.bookingDate,
      price: req.body.price,
    });
    await booking.save();
    const bookings = await Booking.find();
    res.render("cart/cart", { bookings });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
