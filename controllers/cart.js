const slugify = require("slugify");
const Cart = require("../models/cart");

//* create a cart

const createCart = async (req, res) => {
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
    const cart = await Cart.find().populate([
      {
        path: "user",
        select: "firstName",
      },
      { path: "cartItems.product", select: "name" },
    ]);
    if (!cart) {
      return res.status(404).send({ message: "there is now carts " });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* find specific cart
const findSpecificCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      _id: req.params.id,
      user: req.user.userId,
    });
    if (!cart) {
      return res
        .status(404)
        .send({ message: "there is now cart with this id " });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//* update a cart
const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { _id: req.params.id, user: req.user.userId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!cart) {
      return res
        .status(404)
        .send({ message: "there is now cart with this id " });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message, msg: "update cart failed" });
  }
};

//* delete a cart
const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findOneAndDelete({
      _id: req.params.id,
      user: req.user.userId,
    });
    if (!cart) {
      return res
        .status(404)
        .send({ message: "there is now cart with this id " });
    }
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
