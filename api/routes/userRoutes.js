const {
  getUserDetailsController,
  updateUserDetailsController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

// get user details by user id
router.get("/details", authMiddleware, getUserDetailsController);

// update user details
router.put("/update-info", authMiddleware, updateUserDetailsController);

module.exports = router;
