'use strict';

const schema = require('./schema.js/category-schema');
const Model = require('../mongo.js');

class Category extends Model {
  constructor() {
    super(schema);
  }
}

module.exports = new Category();