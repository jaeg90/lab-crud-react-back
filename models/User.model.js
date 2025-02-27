const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email must be unique"],
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: [true, "Username is required"],
    minlength: [3, "Username must have at least 3 characters"],
  },
});

module.exports = model("User", userSchema);
