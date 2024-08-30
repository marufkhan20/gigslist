const {
  registerController,
  loginController,
  resetPasswordController,
  fortgotPasswordController,
  changePasswordController,
  resendVerifyCodeController,
  verifyAccountController,
} = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const registerValidator = require("../validators/registerValidator");

const router = require("express").Router();

// registration route
router.post("/register", registerValidator, registerController);

// login route
router.post("/login", loginController);

// resend verify code
router.put("/resend-verify-code", resendVerifyCodeController);

// verify account
router.put("/verify-account/:id", verifyAccountController);

// get user by email
router.post("/forgot-password", fortgotPasswordController);

// reset account password
router.put("/reset-password/:token", resetPasswordController);

// update password
router.put("/update-password", authMiddleware, changePasswordController);

module.exports = router;
