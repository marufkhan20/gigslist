const User = require("../models/User");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const {
  generateVerificationCode,
  generateVerificationToken,
  checkVerificationTokenValidity,
} = require("../services/verifyUserService");
const sendMail = require("../services/emailService");
const verifyTemplate = require("../templates/verifyTemplate");
const welcomeTemplate = require("../templates/welcomeTemplate");
// const sendMail = require("../services/emailService");

// register controller
const registerController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // check validation
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }

    // check user already existing
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: {
          email: "Email is already exist, Please try to another email!",
        },
      });
    }

    // password hash
    const saltRounds = 10;
    bcrypt.genSalt(saltRounds, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        }

        // generate new verification code
        const verifyCode = generateVerificationCode();
        const verifyToken = generateVerificationToken(verifyCode);

        // Create New User
        const newUser = new User({
          name,
          email,
          verifyToken,
          password: hash,
        });

        let user = await newUser.save();

        // send verification email
        const info = await sendMail({
          from: "freelancermaruf20@gmail.com",
          to: email,
          subject: "Please Verify Your Email Address",
          html: verifyTemplate(verifyCode),
        });

        console.log("info", info);

        if (user?._id) {
          res.status(201).json({
            _id: user?._id,
            email: user?.email,
            verified: user?.verified,
            verificationMode: true,
          });
        }
      });
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

// login controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user available
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        error: {
          email: "User not found! Please try again!!",
        },
      });
    }

    // check password correct or incorrect
    bcrypt.compare(password, user.password, async function (err, result) {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }

      if (!result) {
        return res.status(400).json({
          error: {
            password: "Email or Password Incorrect!",
          },
        });
      }

      // check account verified
      if (!user?.verified) {
        return res.status(400).json({
          error: {
            email: "Account not verified. Please verify your account.",
          },
        });
      }

      // prepare the user object to generate token
      const userObject = {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user?.role,
      };

      // generate token
      const token = jwt.sign(userObject, "secret", {
        expiresIn: "10m",
      });
      console.log(jwt.decode(token));

      res.status(200).json({
        user: userObject,
        token,
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

// resend verify code controller
const resendVerifyCodeController = async (req, res) => {
  try {
    const { _id, email } = req.body || {};

    // generate new verification code
    const verifyCode = generateVerificationCode();
    const verifyToken = generateVerificationToken(verifyCode);

    // send verification email
    const info = await sendMail({
      from: "freelancermaruf20@gmail.com",
      to: email,
      subject: "Please Verify Your Email Address",
      html: verifyTemplate(verifyCode),
    });

    console.log("info", info);

    // update user
    await User.findByIdAndUpdate(_id, { $set: { verifyToken } });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({
      error: err,
    });
  }
};

// verify account controller
const verifyAccountController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const { verifyCode } = req.body || {};

    // get user
    const user = await User.findById(id);

    // check token validity
    const verifyExistedCode = checkVerificationTokenValidity(user?.verifyToken);

    if (!verifyExistedCode) {
      return res.status(400).json({
        error: "Verify code is expired! Please resend verify code.",
      });
    }

    if (Number(verifyCode) === Number(verifyExistedCode)) {
      // update account verified data
      await User.findByIdAndUpdate(id, { $set: { verified: true } });

      // send welcome email
      const info = await sendMail({
        from: "freelancermaruf20@gmail.com",
        to: user?.email,
        subject: "Welcome to gigslist.",
        html: welcomeTemplate(user?.name),
      });

      console.log("info", info);

      res.status(200).json({
        success: true,
      });
    } else {
      return res.status(400).json({
        error: "Verify code is incorrect!! Please try again.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: err,
    });
  }
};

// forgot password controller
const fortgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body || {};

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        error: {
          email: "User Not found!!",
        },
      });
    }

    if (user?._id) {
      // prepare the user object to generate token
      const userObject = {
        _id: user._id,
        email: user.email,
      };

      // generate token
      const token = jwt.sign(userObject, process.env.JWT_SECRET, {
        expiresIn: "10m",
      });

      // generate 4 digit random verify code
      const verifyLink = `${process.env.CLIENT_URL}/reset-password/${token}`;

      // send mail with verify code
      sendMail({
        from: process.env.ADMIN_EMAIL,
        to: username,
        subject: "Forgot Your Account Password.",
        html: require("../services/forgotEmailTemplate")(verifyLink),
      });

      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

// reset password controller
const resetPasswordController = async (req, res) => {
  try {
    let { token } = req.params || {};
    const { password } = req.body || {};

    if (!token) {
      return res.status(401).json({
        error: {
          password: "Verification Failure!!",
        },
      });
    }

    token = token.replace("Bearer ", "");

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    if (decode?._id) {
      // password hash
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          }

          // get user
          const user = await User.findById(decode?._id);

          // Create New User
          user.password = hash;

          await user.save();

          res.status(200).json(user);
        });
      });
    }
  } catch (err) {
    console.error(err);
    res.status(401).json({
      error: {
        password: "Token Expire!!",
      },
    });
  }
};

// change password controller
const changePasswordController = async (req, res) => {
  try {
    const { _id } = req.user || {};
    const { oldPassword, password } = req.body || {};

    const user = await User.findById(_id);

    // check password correct or incorrect
    bcrypt.compare(oldPassword, user?.password, async function (err, result) {
      if (err) {
        return res.status(500).json({
          error: err,
        });
      }

      if (!result) {
        return res.status(400).json({
          error: {
            oldPassword: "Current Password is Incorrect!",
          },
        });
      }

      // update password
      const saltRounds = 10;
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          }

          const updatedUser = await User.findByIdAndUpdate(_id, {
            $set: { password: hash },
          });

          if (updatedUser?._id) {
            res.status(201).json(updatedUser);
          }
        });
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err,
    });
  }
};

module.exports = {
  registerController,
  loginController,
  resendVerifyCodeController,
  verifyAccountController,
  fortgotPasswordController,
  resetPasswordController,
  changePasswordController,
};
