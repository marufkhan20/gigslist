const jwt = require("jsonwebtoken");

// check authentication
const authMiddleware = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({
        error: "Authentication Failure!!",
      });
    }

    token = token.replace("Bearer ", "");

    const decode = jwt.verify(token, "secret");
    console.log("token", token);
    console.log("decode", decode);
    req.user = decode;
    next();
  } catch (err) {
    res.status(401).json({
      message: "JWT Expire!!",
    });
  }
};

module.exports = authMiddleware;
