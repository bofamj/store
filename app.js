require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
/* const session = require("express-session");
const passport = require("passport"); */
//*require files
const connect = require("./DB/connect");
const categoryRoute = require("./router/category");
const subCategoryRoute = require("./router/subCategory");
const brandRoute = require("./router/brand");
const productsRoute = require("./router/product");
const regesterRoute = require("./router/user");
const cartRoute = require("./router/cart");
const auth = require("./middleware/auth");
const adminAuth = require("./middleware/admin");

//* app useing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//*use session
/* app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session()); */

//* routes
app.use("/api/v1/test", [auth, adminAuth], categoryRoute);
app.use("/api/v1", subCategoryRoute);
app.use("/api/v1", brandRoute);
app.use("/api/v1", productsRoute);
app.use("/api/v1", regesterRoute);
app.use("/api/v1", auth, cartRoute);

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
