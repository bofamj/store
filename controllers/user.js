const User = require("../models/user");

//* create a new user
const createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  try {
    const user = await User.create(req.body);
    res.status(200).json({ firstName, lastName, email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const logInUser = async (req, res) => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne({ email });
    const isPassowrd = await user.comparePassword(password);
    if (!isPassowrd) {
      console.log("please provide the right passowrd");
    }
    res.status(200).json(user.email);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, logInUser };
