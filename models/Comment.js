const mongoose = require("mongoose");
require("./Product");
require("./User");
const schema = new mongoose.Schema({
  userID: { type: mongoose.Types.ObjectId, ref: "User" },
  username: { type: String },
  body: { type: String, require: true },
  email: { type: String, require: true },
  score: { type: Number, require: true },
  date: { type: Date, default: () => Date.now(), immutable: false },
  productID: { type: mongoose.Types.ObjectId, ref: "Product" },
  isAccept: { type: Boolean, default: false },
});
const model = mongoose.models.Comment || mongoose.model("Comment", schema);
export default model;
