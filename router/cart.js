const express = require("express");
const router = express.Router();

const {
  createCart,
  findAllCarts,
  findSpecificCart,
  updateCart,
  deleteCart,
} = require("../controllers/cart");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router.route("/cart").get([auth, admin], findAllCarts).post(createCart);
router
  .route("/cart/:id")
  .get(auth, findSpecificCart)
  .delete(auth, deleteCart)
  .patch(auth, updateCart);

module.exports = router;
