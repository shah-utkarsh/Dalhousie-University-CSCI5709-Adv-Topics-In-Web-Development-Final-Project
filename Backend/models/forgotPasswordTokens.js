const mongoose = require("mongoose");
const user = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("forgotPasswordTokens", user);
