const SubCategory = require("../models/subCategory");
const slugify = require("slugify");

//* create a new SubCategory
const createSubCategory = async (req, res) => {
  req.body.slug = slugify(req.body.name);
  try {
    const subCategory = await SubCategory.create(req.body);
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//* get all new SubCategory
const getSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.find();
    if (!subCategory) {
      return res.status(404).send({ message: "there is now subCategorys !! " });
    }
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//* get Specific SubCategory
const getSpecificSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findOne({ _id: req.params.id });
    if (!subCategory) {
      return res
        .status(404)
        .send({ message: "there is now subCategorys with this id!! " });
    }

    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
    if (!subCategory) {
      return res
        .status(404)
        .send({ message: "there is now subCategorys with this id!! " });
    }
    res.status(200).json(subCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//* delete SubCategory
const deleteSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findOneAndDelete({
      _id: req.params.id,
    });
    if (!subCategory) {
      return res
        .status(404)
        .send({ message: "there is now subCategorys with this id!! " });
    }
    res.status(200).send("delete subCategory success");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createSubCategory,
  getSubCategory,
  getSpecificSubCategory,
  updateSubCategory,
  deleteSubCategory,
};
