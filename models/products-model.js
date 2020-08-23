'use strict';

const schema = require('./schema/product-schema.js');
const DataModel = require('./model');

class Products extends DataModel { 
  constructor () {
    super(schema);
  }
}

module.exports = Products;

