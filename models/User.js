const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    firstname: {
      type: String,
      reqired: false,
      default: "کاریر",
    },
    lastname: {
      type: String,
      reqired: false,
      default: "جدید",
    },
    birthday: {
      type: Date,
      default: null,
    },
    email: {
      type: String,
      reqired: true,
      unique: true,
    },
    nationalcode: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      reqired: true,
      unique: true,
    },
    password: {
      type: String,
      reqired: true,
    },
    address: {
      type: String,
      reqired: false,
    },
    role: {
      type: String,
      default: "User",
    },
  },
  { timestamps: true }
);
const model = mongoose.models.User || mongoose.model("User", schema);
export default model;
