const mongoose = require("mongoose");
require("./User");
const schema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  pageName: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
schema.index({ userId: 1, pageName: 1 }, { unique: true });

const model = mongoose.models.Visit || mongoose.model("Visit", schema);
export default model;
