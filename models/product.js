const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchma = new Schema(
  {
    name: { type: String, required: [true, "you must provide a name"] },
    slug: { type: String },
    coveerImg: { type: String, required: [true, "you must provide a picture"] },
    img: [String],
    desctipstion: {
      type: String,
      required: [true, "you must provide a desctipstion"],
    },
    quantity: { type: Number, default: 0 },
    price: { type: Number, default: 0 },
    priceAfterDicount: { type: Number, default: 0 },
    colors: [String],
    sold: {
      type: Number,
      default: 0,
    },
    brand: {
      type: mongoose.Schema.ObjectId,
      ref: "Brand",
    },
    subCategory: {
      type: mongoose.Schema.ObjectId,
      ref: "SubCategory",
      required: [true, "you must provide a subcategory name"],
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Caegory",
    },
    rating: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchma);
