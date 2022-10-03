const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const {
  getAllCategory,
  addCategory,
  findSpecificCtegory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");

router
  .route("/category")
  .get(auth, getAllCategory)
  .post([auth, admin], addCategory);
router
  .route("/category/:id")
  .get(auth, findSpecificCtegory)
  .patch([auth, admin], updateCategory)
  .delete([auth, admin], deleteCategory);

module.exports = router;
