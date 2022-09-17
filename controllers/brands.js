const Brand = require("../models/brand");

//* crate brand
const createBrand = async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* git all Brands
const gitAllBranches = async (req, res) => {
  try {
    const brand = await Brand.find();
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* git Specific Brands
const gitSpecificBrand = async (req, res) => {
  try {
    const brand = await Brand.findOne({ _id: req.params.id });
    res.status(200).json(brand);
  } catch (error) {
    /* console.log(error); */
    res.status(500).json({ message: error.message });
  }
};

//* update brand
const updateBrad = async (req, res) => {
  try {
    const brand = await Brand.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* delete brand
const deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findOneAndDelete({ _id: req.params.id });
    res.status(200).send("you successfully deleted a brand");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBrand,
  gitAllBranches,
  gitSpecificBrand,
  updateBrad,
  deleteBrand,
};
