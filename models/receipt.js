'use strict';

const mongoose = require('mongoose');

const receiptSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true },
  firstName: String,
  lastName: String,
  orderDetails: { type: String, require: true},
  phone: String,
});

// Add `createdAt` and `updatedAt` fields
receiptSchema.set('timestamps', true);

// Transform output during `res.json(data)`, `console.log(data)` etc.
receiptSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
  }
});

module.exports = mongoose.model('Receipt', receiptSchema);