'use strict';

const schema = require('./schema.js/product-schema');
const Model = require('../mongo.js');

class Products extends Model {
  constructor() {
    super(schema);
  }
}

// Export an INSTANCE of a model
// This way, when a client requires us, they can just use the CRUD methods.
module.exports = new Products();

