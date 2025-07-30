const mongoose = require("mongoose");
require("./User");
require("./Address");
require("./Order");
const schema = mongoose.Schema(
  {
    order: { type: mongoose.Types.ObjectId, ref: "Order" },
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
      default: "paid",
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
  },
  { timestamps: true }
);
const model = mongoose.models.Payment || mongoose.model("Payment", schema);
export default model;
