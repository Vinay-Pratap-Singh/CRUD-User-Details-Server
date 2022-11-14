const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  phone: {
    type: Number,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  cpassword: {
    type: String,
    required: true,
  },
});


// creating the model with userSchema
const user = mongoose.model("User", userSchema);
module.exports = user;