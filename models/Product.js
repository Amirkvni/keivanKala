const mongoose = require("mongoose");
require("./Comment");
const { Schema } = mongoose;
const schema = new mongoose.Schema({
  persianName: {
    type: String,
    required: true,
  },
  englishFullName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  secondPrice: {
    type: Number,
    required: false,
  },

  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  saleCount: {
    type: Number,
    default: 0,
  },
  attributes: {
    type: Schema.Types.Mixed,
    required: true,
  },
  colors: {
    type: Schema.Types.Mixed,
    required: true,
  },
  comments: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
});
const model = mongoose.models.Product || mongoose.model("Product", schema);
export default model;
