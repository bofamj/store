const Caegory = require("../models/category");

//* git all category
const getAllCategory = async (req, res) => {
  const allCategory = await Caegory.find();

  res.status(200).json(allCategory);
};

//*add category to DB
const addCategory = async (req, res) => {
  const { name, slug, img } = req.body;
  try {
    const category = await Caegory.create(req.body);
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
};

//*find one category

const findSpecificCtegory = async (req, res) => {
  const {
    params: { id: categoryId },
  } = req;

  try {
    const category = await Caegory.findOne({ _id: categoryId });
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
};

//*find and update category
const updateCategory = async (req, res) => {
  const {
    params: { id: categoryId },
  } = req;
  try {
    const category = await Caegory.findOneAndUpdate(
      { _id: categoryId },
      req.body,
      { new: true }
    );
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
  }
};

//* delete category
const deleteCategory = async (req, res) => {
  const {
    params: { id: categoryId },
  } = req;

  try {
    const category = await Caegory.findOneAndDelete({ _id: categoryId });
    res.status(200).send("delete category success");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllCategory,
  addCategory,
  findSpecificCtegory,
  updateCategory,
  deleteCategory,
};
