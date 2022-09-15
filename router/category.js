const express = require("express");
const router = express.Router();
const addCategory = require("../controllers/category");

router.route("/category").post(addCategory);

module.exports = router;
