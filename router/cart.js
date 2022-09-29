const express = require("express");
const router = express.Router();
const {
  createCart,
  findAllCarts,
  findSpecificCart,
} = require("../controllers/cart");

router.route("/cart").get(findAllCarts).post(createCart);
router.route("/cart/:id").get(findSpecificCart);

module.exports = router;
