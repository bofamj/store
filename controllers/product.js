const Product = require("../models/product");
const slugify = require("slugify");

//* create a new product
const createProduct = async (req, res) => {
  req.body.slug = slugify(req.body.name);
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate([
      {
        path: "category",
        select: "name",
      },
      {
        path: "subCategory",
        select: "name",
      },
      {
        path: "brand",
        select: "name",
      },
    ]);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* get specific product
const getSpecificProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* update product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* delete product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({ _id: req.params.id });
    res.status(200).send("you successfully deleted a product");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getSpecificProduct,
  updateProduct,
  deleteProduct,
};
