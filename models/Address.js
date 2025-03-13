const mongoose = require("mongoose");
require("./User");
const schema = mongoose.Schema({
  fullAddress: { type: String },
  province: { type: String },
  city: { type: String },
  district: { type: String },
  plaque: { type: String },
  postalCode: { type: String },
  unit: { type: String },
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});

const model = mongoose.models.Address || mongoose.model("Address", schema);
export default model;
