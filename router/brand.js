const express = require("express");
const router = express.Router();
const {
  gitAllBranches,
  createBrand,
  gitSpecificBrand,
  updateBrad,
  deleteBrand,
} = require("../controllers/brands");

router.route("/brands").get(gitAllBranches).post(createBrand);
router
  .route("/brands/:id")
  .get(gitSpecificBrand)
  .patch(updateBrad)
  .delete(deleteBrand);

module.exports = router;
