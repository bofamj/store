const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema;
/* const passportLocalMongoose = require("passport-local-mongoose"); */

const UserSchema = new Schema(
  {
    firstName: {
      type: "string",
      required: [true, "you must procvide a name"],
      minLength: [3, "too short name"],
      maxLength: [25, "too long name"],
    },
    lastName: {
      type: "string",
      required: [true, "you must procvide a name"],
      minLength: [3, "too short name"],
      maxLength: [25, "too long name"],
    },
    email: {
      type: "string",
      required: [true, "you must procvide a email"],
      unique: true,
      minLength: [7, "too short email"],
      maxLength: [70, "too long email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please provide a valid email",
      ],
    },
    password: {
      type: "string",
      required: [true, "you must procvide a passwrd"],
      minLength: [6, "too short passwrd"],
    },
    isAdmin: Boolean,
  },
  { timestamps: true }
);

//* crypt password
UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);

  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//*create jwt token
UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.firstName, isAdmin: this.isAdmin },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

//* compare password
UserSchema.methods.comparePassword = async function (aditanyPassword) {
  const isMatch = await bcrypt.compare(aditanyPassword, this.password);
  return isMatch;
};

/* UserSchema.plugin(passportLocalMongoose); */

module.exports = mongoose.model("User", UserSchema);
