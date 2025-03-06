const mongoose = require("mongoose");
require("./Product");
const schema = new mongoose.Schema({
  username: { type: String, require: true },
  body: { type: String, require: true },
  email: { type: String, require: true },
  score: { type: Number, require: true },
  date: { type: Date, default: () => Date.now(), immutable: false },
  productID: { type: mongoose.Types.ObjectId, ref: "Product" },
  isAccept: { type: Boolean, default: false },
});
const model = mongoose.models.Comment || mongoose.model("Comment", schema);
export default model;
