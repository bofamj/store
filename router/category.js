const express = require("express");
const router = express.Router();
const {
  getAllCategory,
  addCategory,
  findSpecificCtegory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");

router.route("/category").get(getAllCategory).post(addCategory);
router
  .route("/category/:id")
  .get(findSpecificCtegory)
  .patch(updateCategory)
  .delete(deleteCategory);

module.exports = router;
