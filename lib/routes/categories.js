'use strict';

const express = require('express');
const categoryRouter = express.Router();

const categories = require('../../models/categories-model.js');

categoryRouter.get('/categories', getCategories);
categoryRouter.post('/categories', postCategories);
categoryRouter.put('/categories', putCategories);

categoryRouter.get('/categories/:id', getOneCategory);
categoryRouter.post('/categories/:id', postOneCategory);
categoryRouter.delete('/categories/:id', deleteOneCategory);
categoryRouter.put('/categories/:id', putOneCategory);


function getOneCategory (request, response, next) {
  const output = {
    fromParam: request.params.id,
    fromRequest: request.id,
  };
  response.status(200).json(output);
}


function postOneCategory (request, response, next) {
  const output = {
    fromParam: request.params.id,
    fromRequest: request.id,
  };
  response.status(200).json(output);
}

//also get the request params for here as well
function deleteOneCategory (request, response, next) {
  const output = {
    fromParam: request.params.id,
    fromRequest: request.id,
  };
  response.status(200).json(output);
}

function putOneCategory (request, response, next) {
  const output = {
    fromParam: request.params.id,
    fromRequest: request.id,
  };
  response.status(200).json(output);
}



//one function for get all, one function for get all
//getoneCategory
function putCategories(request, response, next) {
  categories.put()
    .then(data => {
      response.status(200).json(data);
    });
}

function getCategories(request, response, next) {
  categories.get()
    .then(data=> {
      response.status(200).json(data);
    });
}
//creating a category, bring in a request.body
function postCategories(request, response, next) {
  categories.post()
    .then(data => {
      response.status(200).json(data);
    });
}

// function deleteCategories(request, response, next) {
//   categories.delete()
//     .then(data => {
//       response.status(200).json(data);
//     });
// }


module.exports = categoryRouter;
