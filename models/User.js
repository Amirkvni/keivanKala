const mongoose = require("mongoose");
const SocialSchema = new mongoose.Schema(
  {
    platform: { type: String },
    url: { type: String },
  },
  { _id: true }
);
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

    job: {
      type: String,
      required: false,
    },
    socials: [SocialSchema],
    biography: {
      type: String,
    },
    skills: [
      {
        name: { type: String, required: false },
        level: { type: Number, required: false },
      },
    ],
    profileUrl: {
      type: String,
      required: false,
    },
    lastLogin: {
      type: Date,
      default: null,
    },
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
    accountStatus: {
      type: String,
      default: "active",
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    refreshToken: String,
  },
  { timestamps: true }
);
const model = mongoose.models.User || mongoose.model("User", schema);
export default model;
