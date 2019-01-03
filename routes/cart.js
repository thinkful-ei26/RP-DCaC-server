'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'This is your cart!'
  });
});

router.get('/:cartId', (req, res, next) => {
  const id = req.params.cartId;
  if(id === 'special') {
    res.status(200).json({
      message: 'you discovered the special cart id',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'You passed an ID',
      id: id
    });
  }
});

router.put('/:cartId', (req, res, next) => {
  const id = req.params.cartId;
  if(id === 'special') {
    res.status(200).json({
      message: 'updated item',
      id: id
    });
  }
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Cart was created'
  });
});

router.delete('/:itemId', (req, res, next) => {
  res.status(200).json({
    message: 'deleted item from cart!'
  });
});

module.exports = router;