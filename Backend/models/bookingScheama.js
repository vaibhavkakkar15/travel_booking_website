const { default: mongoose } = require("mongoose");

const bookingScheama = new mongoose.Schema({
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  persons: {
    type: Number,
    required: true,
  },
  price:{
    type:Number,
    require:true,
  },
  bookingDate: {
    type: Date,
    defaul: Date.now(),
  },
});

const Booking = mongoose.model("booking", bookingScheama);
module.exports = Booking;
