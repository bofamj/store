const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const brandSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "you must provide a prand name"],
      unique: [true, "there is already this name "],
    },
    slug: String,
    img: {
      type: String,
      required: [true, "you must provide a img"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Brand", brandSchema);
