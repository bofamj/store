const express = require("express");
const router = express.Router();

const {
  createSubCategory,
  getSubCategory,
  getSpecificSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/subCategory");

router.route("/subCategory").get(getSubCategory).post(createSubCategory);

router
  .route("/subCategory/:id")
  .get(getSpecificSubCategory)
  .patch(updateSubCategory)
  .delete(deleteSubCategory);

module.exports = router;
