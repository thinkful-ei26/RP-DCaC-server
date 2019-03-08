'use strict';
const express = require('express');
const router = express.Router();
const confirm = require('../utils/confirmationEmail');
const sendEmail = require('../utils/sendEmail');

router.post('/', (req, res, next) => {
  console.log(req.body);
  const email = req.body.email;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const phone = req.body.phone;
  const orderDetails = req.body.orderDetails;

  let confirmationEmail = {
    email,
    firstName,
    lastName,
    phone,
    orderDetails
  };

  console.log('CONFIRMATION EMAIL::::', confirmationEmail);

  sendEmail(email, confirm(confirmationEmail))
    .then(() => res.json({message: 'Email sent, please check your inbox to confirm'}))
    .catch(err => next(err));
});

module.exports = router;