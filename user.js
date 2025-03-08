const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Friends List
  location: { type: String, default: "" } // Store last known location
});

module.exports = mongoose.model("User", UserSchema);
