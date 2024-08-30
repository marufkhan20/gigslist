const User = require("../models/User");

// get user details controller
const getUserDetailsController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const user = await User.findById(_id);
    user.password = "";
    user.verifyToken = "";
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

// update user details controller
const updateUserDetailsController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    console.log("body", req.body);
    await User.findByIdAndUpdate(_id, { $set: req.body });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getUserDetailsController,
  updateUserDetailsController,
};
