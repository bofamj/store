const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CartSchema = new Schema(
  {
    cartItems: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, default: 1 },
        color: String,
        price: Number,
      },
    ],
    user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
    totalPrice: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
