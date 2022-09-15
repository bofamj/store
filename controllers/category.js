const mongoose = require("mongoose");
const Caegory = require("../models/category");

const addCategory = async (req, res) => {
  const { name, slug, img } = req.body;
  try {
    const category = await Caegory.create(req.body);
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
};

module.exports = addCategory;
