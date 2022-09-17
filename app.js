require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

//*require files
const connect = require("./DB/connect");
const categoryRoute = require("./router/category");
const subCategoryRoute = require("./router/subCategory");

//* app useing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(cors());

//*test route
app.use("/api/v1/test", categoryRoute);
app.use("/api/v1", subCategoryRoute);

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
