const { default: mongoose, trusted } = require("mongoose");
const longDescScheama = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
    }
});
let LongDesc = mongoose.model("LongDesc", longDescScheama);
module.exports = LongDesc;