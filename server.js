'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const { PORT, CLIENT_ORIGIN, MONGODB_URI } = require('./config');
const { dbConnect } = require('./db-mongoose');
require('dotenv').config();

const itemRoutes = require('./routes/items');
const cartRoutes = require('./routes/cart');
const wishlistRoutes = require('./routes/wishlist');
const accountRoutes = require('./routes/account');
const Item = require('./models/item');

//********** Need to create Routers and add them below */

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

app.use('/items', itemRoutes);
app.use('/shopping-cart', cartRoutes);
app.use('/wishlist', wishlistRoutes);
app.use('account-info', accountRoutes);


app.use((req, res, next) => {
  res.status(200).json({
    message: 'it worked!'
  });
  // Item.find()
  //   .then(item => {
  //     console.log(item);
  //     return res.json(item);
  //   })
  //   .catch(err => {
  //     next(err);
  //   });
});

// app.use((req, res, next) => {
//   const err = new Error ('Not Found');
//   err.status = 404;
//   next(err);
// });

//need to creat an error handler

if (require.main === module) {
  //  // Connect to DB and Listen for incoming connections
  mongoose.connect(MONGODB_URI, { useNewUrlParser:true }) //Mongo will automatically create the db here if it doesnt exist, and then mongoose will automatically create any collections that dont already exist by going through your models
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