const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getSpecificProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product");

router.route("/product").get(getAllProducts).post(createProduct);
router
  .route("/product/:id")
  .get(getSpecificProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = router;
