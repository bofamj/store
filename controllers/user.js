const User = require("../models/user");
//const passport = require("passport");
const jwt = require("jsonwebtoken");

//* create a new user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = user.createJWT();
    res.status(200).json({
      "first name": user.firstName,
      "last name": user.lastName,
      email: user.email,
      token: token,
    });
  } catch (error) {}
};

//*login user
const logInUser = async (req, res) => {
  const { password, email } = req.body;

  try {
    //*find the user in the DB
    const user = await User.findOne({ email });

    //*compare the password
    const isPassowrd = await user.comparePassword(password);

    //*the password is wrong throw an error
    if (!isPassowrd) {
      res.status(400).json({ message: "Password is incorrect" });
    }
    const token = user.createJWT();
    res.status(200).json({ email: user.email, token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, logInUser };

/*//*cerate a new strategy

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//* create a new user
const createUser = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  User.register(
    {
      username: email,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: req.body.password,
    },
    req.body.password,
    (err, user) => {
      if (err) {
        res.status(400).send(err);
      } else {
        passport.authenticate("local")(req, res, () => {
          res.status(200).json(user);
        });
      }
    }
  );
  /*  try {
    const user = await User.create(req.body);
    res.status(200).json({ firstName, lastName, email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  } 
};

//*login user
const logInUser = async (req, res) => {
  const { password, email } = req.body;

  try {
    //*find the user in the DB
    const user = await User.findOne({ email });

    //*compare the password
    const isPassowrd = await user.comparePassword(password);

    //*the password is wrong throw an error
    if (!isPassowrd) {
      res.status(400).json({ message: "Password is incorrect" });
    }
    //*login the user with passportjs
    req.login(user, (err) => {
      if (err) {
        res.status(500).json({ message: err.message, msg: "cant login" });
      } else {
        //*authenticate the user and send the cockes
        passport.authenticate("local")(req, res, () => {
          res.status(200).json(Set - Cookie);
        });
      }
    });
    /* res.status(200).json(user.email); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; */
