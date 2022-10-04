const express = require("express");
const router = express.Router();

const {
  createSubCategory,
  getSubCategory,
  getSpecificSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/subCategory");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router
  .route("/subCategory")
  .get(auth, getSubCategory)
  .post([auth, admin], createSubCategory);

router
  .route("/subCategory/:id")
  .get(auth, getSpecificSubCategory)
  .patch([auth, admin], updateSubCategory)
  .delete([auth, admin], deleteSubCategory);

module.exports = router;
