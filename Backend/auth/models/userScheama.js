const { default: mongoose } = require("mongoose");

let userScheama = new mongoose.Schema({
  username: String,
  password: String,
});

let User = mongoose.model("User", userScheama);
module.exports = User;
