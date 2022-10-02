const User = require("../models/user");
const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return res.status(403).send("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(payload);
    req.user = {
      userId: payload.userId,
      name: payload.firstName,
      isAdmin: payload.isAdmin,
    };
    next();
  } catch (error) {
    return res.status(500).send("Invalid authorization");
  }
};

module.exports = auth;
