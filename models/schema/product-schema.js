'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name: { type: String },
  category: { type: String },
  description: { type: String },
  price: { type: Number },
  inStock: { type: Number },
});

module.exports = mongoose.model('products', products);

