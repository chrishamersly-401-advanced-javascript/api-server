'use strict';

const express = require('express');
const productRouter = express.Router();

const Products = require('../../models/products-model.js');
const products = new Products();

productRouter.get('/products', getProducts);
productRouter.post('/products', postProducts);
productRouter.put('/products', putProducts);

productRouter.get('/products/:id', getOneProduct);
productRouter.post('/products/:id', postOneProduct);
productRouter.delete('/products/:id', deleteOneProduct);
productRouter.put('/products/:id', putOneProduct);



function getProducts(request, response, next) {
  products.get()
    .then(data=> {
      response.status(200).json(data);
    });
}

function postProducts(request, response, next) {
  console.log('in post Route');
  products.post()
    .then(data => {
      response.status(200).json(data);
    });
    
}

function putProducts(request, response, next) {
  products.put()
    .then(data => {
      response.status(200).json(data);
    });
}

function getOneProduct (request, response, next) {
  products.get();
  const output = {
    fromParam: request.params.id,
    fromRequest: request.id,
  };
  response.status(200).json(output);
}

function postOneProduct (request, response, next) {
  products.post();
  const output = {
    fromParam: request.params.id,
    fromRequest: request.id,
  };
  response.status(200).json(output);
}

function deleteOneProduct (request, response, next) {
  products.delete();
  const output = {
    fromParam: request.params.id,
    fromRequest: request.id,
  };
  response.status(200).json(output);
}

function putOneProduct (request, response, next) {
  products.put();
  const output = {
    fromParam: request.params.id,
    fromRequest: request.id,
  };
  response.status(200).json(output);
}

module.exports = productRouter;