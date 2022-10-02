const express = require("express");
const router = express.Router();
const {
  gitAllBranches,
  createBrand,
  gitSpecificBrand,
  updateBrad,
  deleteBrand,
} = require("../controllers/brands");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router
  .route("/brands")
  .get(auth, gitAllBranches)
  .post([auth, admin], createBrand);
router
  .route("/brands/:id")
  .get(auth, gitSpecificBrand)
  .patch([auth, admin], updateBrad)
  .delete([auth, admin], deleteBrand);

module.exports = router;
