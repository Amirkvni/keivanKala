const mongoose = require("mongoose");
const schema = mongoose.Schema(
  {
    title: { type: String },
    introduction: { type: String },
    content: [
      {
        title: { type: String },
        text: { type: String },
        image: { type: String },
      },
    ],
    author: {
      type: String,
    },
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
