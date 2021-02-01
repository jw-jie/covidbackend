// /helpers/email.js
const nodeMailer = require("nodemailer");
 
exports.sendEmailWithNodemailer = (req, res, emailData) => {
  const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL, 
      pass: process.env.EMAIL_PASSWORD, 
    },
    tls: {
      ciphers: "SSLv3",
    },
  });
 
  return transporter
    .sendMail(emailData)
    .then((info) => {
      console.log(`Message sent: ${info.response}`);
      return res.status(200).json({
        message: `Registered Successfully. An email has been sent to your email address`,
      });
    })
    .catch((err) => console.log(`Problem sending email: ${err}`));
};
 