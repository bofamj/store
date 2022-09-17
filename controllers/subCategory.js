const SubCategory = require("../models/subCategory");

//* create a new SubCategory
const createSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.create(req.body);
    res.status(200).json(subCategory);
  } catch (error) {
    console.log(error.message);
  }
};
//* get all new SubCategory
const getSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.find();
    res.status(200).json(subCategory);
  } catch (error) {
    console.log(error.message);
  }
};
//* get Specific SubCategory
const getSpecificSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findOne({ _id: req.params.id });
    res.status(200).json(subCategory);
  } catch (error) {
    console.log(error.message);
  }
};
//* update SubCategory
const updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json(subCategory);
  } catch (error) {
    console.log(error.message);
  }
};
//* delete SubCategory
const deleteSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).send("delete subCategory success");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createSubCategory,
  getSubCategory,
  getSpecificSubCategory,
  updateSubCategory,
  deleteSubCategory,
};
