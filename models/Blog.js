const mongoose = require("mongoose");
require("./User");
const schema = mongoose.Schema(
  {
    title: { type: String },
    content: { type: String, required: true },
    author: { type: mongoose.Types.ObjectId, ref: "User" },
    mainImage: {
      type: String,
    },
    categories: [{ type: String }],
    tags: [{ type: String }],
    link: { type: String },
  },
  { timestamps: true }
);

const model = mongoose.models.Blog || mongoose.model("Blog", schema);
export default model;
