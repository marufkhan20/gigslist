const nodemailer = require("nodemailer");

const sendMail = async ({ from, to, subject, html }) => {
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.sendinblue.com",
    port: 587,
    secure: false,
    auth: {
      user: "mdm326040@gmail.com",
      pass: "fHdgQPBDhYZxcEMa",
    },
  });

  return (info = await transporter.sendMail({
    from,
    to,
    subject,
    html,
  }));
};

module.exports = sendMail;
