'use strict';

const Receipt = require('../models/receipt');
const sendEmail = require('./email.send');
const templates = require('./email.templates');

// The callback that is invoked when the user submits the form on the client.
exports.collectEmail = (req, res) => {
  const { email } = req.body;
  const { firstName } = req.body;
  const { lastName } = req.body;
  const { phone } = req.body;
  const { orderDetails } = req.body;

  Receipt.create({ email, firstName, lastName, phone, orderDetails})
    .then(newReceipt => {
      sendEmail(newReceipt.email, templates.confirm(newReceipt));
      sendEmail('donnascraftsncreations@gmail.com', templates.confirmDonna(newReceipt));
    })
    .then(() => res.json({ msg: 'Order Sent!  Please check your inbox for payment details.' }))
    .catch(err => console.log('THIS IS THE ERROR>>>>', err));
};