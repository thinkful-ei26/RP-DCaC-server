'use strict';
const nodemailer = require('nodemailer');
const { MAIL_USER, MAIL_PASS } = require('../config');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: false,
  auth: {
    user: MAIL_USER, 
    pass: MAIL_PASS
  }
  // tls: {
  //   rejectUnauthorized: false
// }
});

async function sendEmail(to, content) {
  const email = {...content, from: MAIL_USER, to};
  await transporter.sendMail(email);
}

module.exports = sendEmail;