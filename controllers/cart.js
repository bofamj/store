const slugify = require("slugify");
const Cart = require("../models/cart");

//* create a cart

const createCart = async (req, res) => {
  /* req.body.slug = slugify(req.body.name); */
  try {
    const cart = await Cart.create(req.body);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* find all carts
const findAllCarts = async (req, res) => {
  try {
    const cart = await Cart.find().populate([
      {
        path: "user",
        select: "firstName",
      },
      { path: "cartItems.product", select: "name" },
    ]);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* find specific cart
const findSpecificCart = async (req, res) => {
  try {
    const cartId = req.params._id;
    const cart = await Cart.findOne({ _id: req.params.id });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createCart, findAllCarts, findSpecificCart };
