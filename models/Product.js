const mongoose = require("mongoose");
const { Schema } = mongoose;
const schema = {
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
};
const model = mongoose.models.Product || mongoose.model("Product", schema);
export default model;
