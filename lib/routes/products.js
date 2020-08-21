'use strict';

const express = require('express');
const productRouter = express.Router();

const products = require('../../models/products-model.js');

productRouter.get('/categories', getProducts);
productRouter.post('/categories', postProducts);
productRouter.put('/categories', putProducts);

productRouter.get('/categories/:id', getOneProduct);
productRouter.post('/categories/:id', postOneProduct);
productRouter.delete('/categories/:id', deleteOneProduct);
productRouter.put('/categories/:id', putOneProduct);



function getProducts(request, response, next) {
  products.get()
    .then(data=> {
      response.status(200).json(data);
    });
}

function postProducts(request, response, next) {
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