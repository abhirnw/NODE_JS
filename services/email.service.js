const nodemailer = require("nodemailer");
const config = require("../config/config");

let transport = nodemailer.createTransport({
  host: config.email.smtp.host,
  port: config.email.smtp.port,
  auth: {
    user: config.email.smtp.auth.user,
    pass: config.email.smtp.auth.pass,
  },
});

/** Send mail */
const sendMail = async (to, subject, text) => {
  try {
    return transport.sendMail({
      from: config.email.from,
      to,
      subject,
      text,
      html: `
      <div
        class="container"
        style="max-width: 90%; margin: auto; padding-top: 20px"
      >
        <h2>Welcome to the club.</h2>
        <h4>You are officially In ✔</h4>
        <p style="margin-bottom: 30px;">Pleas enter the sign up OTP to get started</p>
        <h1 style="font-size: 40px; letter-spacing: 2px; text-align:center;">${123456}</h1>
   </div>
      `
    });
  } catch (error) {
    return false;
  }
};

module.exports = {
  sendMail,
};
