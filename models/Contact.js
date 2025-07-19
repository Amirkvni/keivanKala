const mongoose = require("mongoose");
require("./User");
const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    text: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["open", "pending", "closed"],
      default: "open",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Contact || mongoose.model("Contact", schema);
export default model;
