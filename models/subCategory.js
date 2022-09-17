const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subCategory = Schema({
  name: {
    type: String,
    require: [true, "you have to provide a name"],
    unique: [true, "the name must be unique"],
  },
  img: {
    type: String,
    require: [true, "you have to provide an img"],
  },
  slug: {
    type: String,
    lowercase: true,
  },
  categore: {
    type: mongoose.Schema.ObjectId,
    ref: "Caegory",
    required: [true, "SubCategory must be belong to parent category"],
  },
});

module.exports = mongoose.model("SubCategory", subCategory);
