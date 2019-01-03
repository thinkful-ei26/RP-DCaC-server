'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'This is your wishlist!'
  });
});

router.get('/:wishlistId', (req, res, next) => {
  const id = req.params.wishlistId;
  if(id === 'special') {
    res.status(200).json({
      message: 'you discovered the special wishlist id',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'You passed an unknown wishlist ID',
      id: id
    });
  }
});

router.put('/:cartId', (req, res, next) => {
  const id = req.params.cartId;
  if(id === 'special') {
    res.status(200).json({
      message: 'updated item in your wishlist',
      id: id
    });
  }
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Wishlist was created'
  });
});

router.delete('/:itemId', (req, res, next) => {
  res.status(200).json({
    message: 'deleted item from your wishlist!'
  });
});

module.exports = router;
