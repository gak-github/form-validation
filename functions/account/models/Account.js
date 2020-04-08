const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "Please add first name"],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Please add last name"],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please add email "],
  },
  password: {
    type: String,
    trim: true,
    required: [true, "Please add password"],
  },
  userAgreement: {
    type: Boolean,
    trim: true,
    required: [true, "Please accept user agreement"],
  }
});

module.exports = mongoose.model("Account", AccountSchema);