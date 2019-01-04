'use strict';

const express = require('express');
const router = express.Router();
const Item = require('../models/item');

router.get('/', (req, res, next) => {
  Item.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json([docs]);
    })
    .catch(err => {
      console.log(err);
    });
});


router.get('/:itemId', (req, res, next) => {
  const id = req.params.itemId;
  Item.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      if(doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({message: 'Not a valid ID'});
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({error: err});
    });
});

router.put('/:itemId', (req, res, next) => {
  const id = req.params.itemId;
  if(id === 'special') {
    res.status(200).json({
      message: 'updated item',
      id: id
    });
  }
});

router.post('/', (req, res, next) => {
  const item = new Item({
    title: req.body.title,
    img: req.body.img,
    price: req.body.price,
  });

  item.save().then(result => {
    console.log(result);
  })
    .catch(err => console.log(err));
  res.status(201).json({
    message: 'Handled POST request',
    createdItem: item
  });
  
});

// router.delete('/:itemId', (req, res, next) => {
//   const id = req.params.itemId;
//   Item.remove({id})
//     .exec()
//     .then()
//   res.status(200).json({
//     message: 'deleted item!'
//   });
// });

module.exports = router;