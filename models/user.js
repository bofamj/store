const mongoose = require("mongoose");

const Schema = mongoose.schema();

const UserSchema = new Schema({
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
    minLength: [7, "too short email"],
    maxLength: [70, "too long email"],
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "please provide a valid email",
    ],
  },
  passwrd: {
    type: "string",
    required: [true, "you must procvide a passwrd"],
    minLength: [6, "too short passwrd"],
  },
});
