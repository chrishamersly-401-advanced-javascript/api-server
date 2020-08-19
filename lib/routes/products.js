'use strict';

const express = require('express');


const productRouter = express.Router();

productRouter.get('/products', getProducts);
productRouter.post('/products', postProducts);

function getProducts(request, response, next) {
  products.get()
    .then(data=> {
      response.status(200).json(data);
    });
}

function postProducts(request, response, next) {
  products.create()
    .then(data => {
      response.status(200).json(data);
    });
    // .catch(next);
}
// //uses the object in the body of the request to create a new “record”
// app.post('/products', (request, response) => {
//   request.body = new Record
// });


// app.get('/products', (request, response) => {
//   request.body = new Record;
// });

// app.get('/products/:id', (reqquest, response) => {

// })


// // uses the object in the body to replace the record with the :id specified
// app.put('/products/:id', (req, res) => {

// })


// //deletes the record with the :id specified
// app.delete('/products/:id', (req, res) => {

// }) 