const mongoose = require("mongoose");
require("./User");
require("./Product");
require("./Payment");
const schema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    orderDate: {
      type: Date,
      default: () => Date.now(),
    },
    delivery: {
      id: { type: Number },
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
    payment: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
  },
  { timestamps: true }
);

const model = mongoose.models.Order || mongoose.model("Order", schema);
export default model;
