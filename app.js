require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

//*require files
const connect = require("./DB/connect");
const categoryRoute = require("./router/category");
const subCategoryRoute = require("./router/subCategory");
const brandRoute = require("./router/brand");
const productsRoute = require("./router/product");
const regesterRoute = require("./router/user");

//* app useing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(cors());

//* routes
app.use("/api/v1/test", categoryRoute);
app.use("/api/v1", subCategoryRoute);
app.use("/api/v1", brandRoute);
app.use("/api/v1", productsRoute);
app.use("/api/v1", regesterRoute);

//*starting the server
const start = async () => {
  try {
    //*connect the DB
    connect(process.env.MONGO_URI);
    app.listen("8080", () => console.log("app is listening on port 8080"));
  } catch (error) {
    console.log("error: ", error);
  }
};

start();
