const mongoose = require("mongoose");
require("./User");
require("./Address");

const schema = mongoose.Schema({
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  products: [
    {
      _id: {
        type: mongoose.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      persianName: {
        type: String,
      },
      quantity: {
        type: String,
      },
    },
  ],
  orderDate: {
    type: Date,
    default: () => Date.now(),
  },
  delivery: {
    day: {
      type: String,
    },
    date: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  status: {
    type: String,
    default: "pending",
  },
  paid: {
    type: String,
  },
  discount: {
    type: String,
  },
  address: {
    type: mongoose.Types.ObjectId,
    ref: "Address",
  },
  trackingCode: {
    type: String,
    required: true,
    unique: true,
  },
});
const model = mongoose.models.Payment || mongoose.model("Payment", schema);
export default model;
