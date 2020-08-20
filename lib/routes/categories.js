'use strict';

const express = require('express');
const categoryRouter = express.Router();


categoryRouter.get('/categories', getCategories);
categoryRouter.get('/categories/:id', getCategories);
categoryRouter.post('categories', postCategories);
categoryRouter.post('categories/:id', postCategories);
categoryRouter.delete('/categories', deleteCategories);
categoryRouter.delete('/categories/:id', deleteCategories);
categoryRouter.put('/categories', putCategories);
categoryRouter.put('/categories/:id', putCategories);



function putCategories(request, response, next) {
  putCategories.put()
    .then(data => {
      response.status(200).json(data);
    });
}

function getCategories(request, response, next) {
  getCategories.get()
    .then(data=> {
      response.status(200).json(data);
    });
}

function postCategories(request, response, next) {
  postCategories.post()
    .then(data => {
      response.status(200).json(data);
    });
}

function deleteCategories(request, response, next) {
  deleteCategories.delete()
    .then(data => {
      response.status(200).json(data);
    });
}


module.exports = categoryRouter;
