const express = require("express");
const router = express.Router();

const { createUser, logInUser } = require("../controllers/user");

router.route("/user/regester").post(createUser);
router.route("/user/login").post(logInUser);

module.exports = router;
