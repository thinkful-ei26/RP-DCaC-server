'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'This is your account info!'
  });
});

router.get('/:accountId', (req, res, next) => {
  const id = req.params.accountId;
  if(id === 'special') {
    res.status(200).json({
      message: 'you discovered the special account id',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'You passed an ID',
      id: id
    });
  }
});

router.put('/:accountId', (req, res, next) => {
  const id = req.params.accountId;
  if(id === 'special') {
    res.status(200).json({
      message: 'updated account settings',
      id: id
    });
  }
});

router.post('/', (req, res, next) => {
  res.status(201).json({
    message: 'Account was created'
  });
});

router.delete('/:accountId', (req, res, next) => {
  res.status(200).json({
    message: 'deleted info from account!'
  });
});

module.exports = router;