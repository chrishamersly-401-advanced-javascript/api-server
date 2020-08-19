'use strict';

const mongoose = require('mongoose');

const product = mongoose.Schema({
  name: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String, required: true},
  price: { type: Number, required: true },
  inStock: { type: Number, required: true},
});

module.exports = mongoose.model('product', product);
