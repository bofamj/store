const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: {
      type: "string",
      required: [true, "please enter a category name"],
      unique: [true, "the name must be unique"],
    },
    slug: {
      type: "string",
      lowercase: true,
    },
    img: "string",
  },

  { timestamps: true }
);

module.exports = mongoose.model("Caegory", categorySchema);
