const Brand = require("../models/brand");
const slugify = require("slugify");

//* crate brand
const createBrand = async (req, res) => {
  req.body.slug = slugify(req.body.name);
  try {
    const brand = await Brand.create(req.body);
    res.status(200).json(brand);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//* git all Brands
const gitAllBranches = async (req, res) => {
  try {
    const brand = await Brand.find();
    if (!brand) {
      return res.status(404).send({ message: "there is now brands " });
    }
    res.status(200).json(brand);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//* git Specific Brands
const gitSpecificBrand = async (req, res) => {
  try {
    const brand = await Brand.findOne({ _id: req.params.id });
    if (!brand) {
      return res.status(404).send({ message: "the is now brand whit this id" });
    }
    res.status(200).json(brand);
  } catch (error) {
    /* console.log(error); */
    return res.status(500).json({ message: error.message });
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
    if (!brand) {
      return res.status(404).send({ message: "the is now brand whit this id" });
    }
    res.status(200).json(brand);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//* delete brand
const deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findOneAndDelete({ _id: req.params.id });
    if (!brand) {
      return res.status(404).send({ message: "the is now brand whit this id" });
    }
    res.status(200).send("you successfully deleted a brand");
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBrand,
  gitAllBranches,
  gitSpecificBrand,
  updateBrad,
  deleteBrand,
};
