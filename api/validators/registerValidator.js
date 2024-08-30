const validator = require("express-validator");

const { checkSchema } = validator;

const registerValidator = checkSchema({
  email: {
    trim: true,
    errorMessage: "Email is required!",
    notEmpty: true,
    isEmail: {
      errorMessage: "Email should be a valid email",
    },
  },
  name: {
    errorMessage: "Last Name is required!",
    notEmpty: true,
    trim: true,
  },
  password: {
    errorMessage: "Password is required!",
    notEmpty: true,
    isLength: {
      options: {
        min: 8,
      },
      errorMessage: "Password length should be at least 8 chars!",
    },
    trim: true,
  },
});

module.exports = registerValidator;
