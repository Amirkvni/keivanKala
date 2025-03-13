const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: false,
      default: "کاریر",
    },
    lastname: {
      type: String,
      required: false,
      default: "جدید",
    },
    birthday: {
      type: {
        year: { type: Number, required: false },
        month: { type: Number, required: false },
        day: { type: Number, required: false },
      },
      default: {
        year: null,
        month: null,
        day: null,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    nationalcode: {
      type: String,
      default: null,
      required: false,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
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
