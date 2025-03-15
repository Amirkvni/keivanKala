const mongoose = require("mongoose");
require("./User");
require("./Product");
const schema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        min: 1,
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  address: {
    type: String,
  },
  delivery: [
    {
      day: {
        type: Number,
      },
      date: {
        type: String,
      },
      price: {
        type: String,
      },
    },
  ],

  status: {
    type: String,
    default: "pending",
  },
});

const model = mongoose.models.Order || mongoose.model("Order", schema);
export default model;
