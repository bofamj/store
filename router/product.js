const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getSpecificProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router
  .route("/product")
  .get(auth, getAllProducts)
  .post([auth, admin], createProduct);
router
  .route("/product/:id")
  .get(auth, getSpecificProduct)
  .patch([auth, admin], updateProduct)
  .delete([auth, admin], deleteProduct);

module.exports = router;
