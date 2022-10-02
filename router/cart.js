const express = require("express");
const router = express.Router();

const {
  createCart,
  findAllCarts,
  findSpecificCart,
  updateCart,
  deleteCart,
} = require("../controllers/cart");

router.route("/cart").get(findAllCarts).post(createCart);
router
  .route("/cart/:id")
  .get(findSpecificCart)
  .delete(deleteCart)
  .patch(updateCart);

module.exports = router;
