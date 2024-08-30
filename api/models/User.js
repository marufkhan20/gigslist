const { model, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    verifyToken: String,
    verified: {
      type: Boolean,
      default: false,
    },
    businessName: String,
    websiteUrl: String,
    businessEmail: String,
    phone: String,
    profilePic: String,
    role: {
      type: String,
      default: "seller",
    },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
