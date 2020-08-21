'use strict';

const schema = require('./schema/category-schema.js');
const DataModel = require('./model');

class Categories extends DataModel { }

console.log('in the categories-model file');
module.exports = new Categories(schema);