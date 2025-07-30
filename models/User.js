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
      required: false,
    },
    role: {
      type: String,
      default: "User",
    },
    job: {
      type: String,
      required: false,
    },
    socials: [
      {
        platform: {
          type: String,
          required: false,
        },
        url: {
          type: String,
          required: false,
        },
      },
    ],
    skills: [
      {
        name: { type: String, required: false },
        level: { type: Number, required: false },
      },
    ],

    education: { type: String, required: false },
    experiences: [
      {
        title: { type: String, required: false },
        company: { type: String, required: false },
        startDate: { type: Date, required: false },
        endDate: { type: Date, required: false },
        description: { type: String, required: false },
      },
    ],
    refreshToken: String,
  },
  { timestamps: true }
);
const model = mongoose.models.User || mongoose.model("User", schema);
export default model;
