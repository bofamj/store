const slugify = require("slugify");
const Cart = require("../models/cart");

//* create a cart

const createCart = async (req, res) => {
  /* req.body.slug = slugify(req.body.name); */
  try {
    req.body.user = req.user.userId;

    const cart = await Cart.create(req.body);
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* find all carts
const findAllCarts = async (req, res) => {
  try {
    const cart = await Cart.find({ user: req.user.userId }).populate([
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
    const cart = await Cart.findOne({ _id: req.params.id });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* update a cart
const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message, msg: "update cart failed" });
  }
};

//* delete a cart
const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ msg: "you have successfully deleted the cart" });
  } catch (error) {
    res.status(500).json({ message: error.message, msg: "delete cart failed" });
  }
};

module.exports = {
  createCart,
  findAllCarts,
  findSpecificCart,
  updateCart,
  deleteCart,
};
