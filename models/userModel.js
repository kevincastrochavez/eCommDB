const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  lastName: {
    type: String,
    required: [true, "Please tell us your lastname!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (passwordConfirm) {
        return passwordConfirm === this.password;
      },
      message: "Passwords are not the same",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  cart: {
    // type: String,
  },
  shipAddress: {
    type: String,
    required: [true, "Please provide your Address!"],
  },
  shipCity: {
    type: String,
    required: [true, "Please your City!"],
  },
  shipZipCode: {
    type: String,
    required: [true, "Please provide your Zip Code!"],
    validate: [validator.isPostalCode, "Provide a valid Zip Code"],
  },
  shipCountry: {
    type: String,
    required: [true, "Please provide your Country!"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please provide your phone number!"],
    validate: [validator.isMobilePhone, "Provide a valid phone number"],
  },
  creditCardNumber: {
    type: String,
    required: [true, "Please provide your Credit Card Number!"],
    validate: [validator.isCreditCard, "Provide a valid Credit Card"],
  },
  creditCardName: {
    type: String,
    required: [true, "Please provide your Credit Card Name!"],
  },
  creditCardExpDate: {
    type: String,
    required: [true, "Please provide the Expiration Date!"],
  },
  creditCardCCV: {
    type: String,
    required: [true, "Please enter your CCV code!"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
