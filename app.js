require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

//*useing cors
app.use(cors());

//*test route
app.get("/api/v1/test", (req, res) => {
  res.send("heloo world");
});

//*starting the server
app.listen("8080", () => console.log("app is listening on port 8080"));
