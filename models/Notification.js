const mongoose = require("mongoose");
require("./User");
const schema = mongoose.Schema({
  title: { type: String },
  text: { type: String },
  type: { type: String },
  endTime: { type: String },
  isRead: { type: Boolean, default: false },
  products: [
    {
      image: { type: String },
      text: { type: String },
    },
  ],
  userId: { type: mongoose.Types.ObjectId, ref: "User" },
});
const model =
  mongoose.models.Notification || mongoose.model("Notification", schema);
export default model;
