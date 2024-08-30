const jwt = require("jsonwebtoken");

const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const generateVerificationToken = (verifyCode) => {
  return jwt.sign({ verifyCode }, process.env.VERIFICATION_SECRET, {
    expiresIn: "5m",
  });
};

const checkVerificationTokenValidity = (verifyToken) => {
  try {
    if (!verifyToken) {
      return res.status(500).json({
        error: "Verification token not found!!",
      });
    }

    const decode = jwt.verify(verifyToken, process.env.VERIFICATION_SECRET);

    return decode?.verifyCode;
  } catch (err) {
    return false;
  }
};

module.exports = {
  generateVerificationCode,
  generateVerificationToken,
  checkVerificationTokenValidity,
};
