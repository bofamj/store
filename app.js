require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

//*require files
const connect = require("./DB/connect");

//*useing cors
app.use(cors());

//*test route
app.get("/api/v1/test", (req, res) => {
  res.send("heloo world");
});

//*starting the server
const start = async () => {
  try {
    connect(process.env.MONGO_URI);
    app.listen("8080", () => console.log("app is listening on port 8080"));
  } catch (error) {
    console.log("error: ", error);
  }
};

start();
