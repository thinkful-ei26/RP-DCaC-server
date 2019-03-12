'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const emailController = require('./email/email.controller');
const { PORT, CLIENT_ORIGIN, MONGODB_URI } = require('./config');
const { dbConnect } = require('./db-mongoose');

const itemRoutes = require('./routes/items');
const cartRoutes = require('./routes/cart');
const wishlistRoutes = require('./routes/wishlist');
const accountRoutes = require('./routes/account');

const app = express();

app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.use(
  morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev', {
    skip: (req, res) => process.env.NODE_ENV === 'test'
  })
);

app.use(express.json());

app.post('/email', emailController.collectEmail);

app.use('/api/items', itemRoutes);
app.use('/api/shopping-cart', cartRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/account-info', accountRoutes);

if (require.main === module) {
  mongoose.connect(MONGODB_URI, { useNewUrlParser:true })
    .catch(err => {
      console.error(`ERROR: ${err.message}`);
      console.error('\n === Did you remember to start `mongod`? === \n');
      console.error(err);
    });

  app.listen(PORT, function () {
    console.info(`Server listening on ${this.address().port}`);
  }).on('error', err => {
    console.error(err);
  });
}

module.exports = app;
