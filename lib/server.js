'use strict';
//global variables
const express = require('express');
require('dotenv').config();
const app = express();

const loggerMiddleware = require('../middleware/logger.js');
const errorFour = require('../middleware/404.js');
const errorFive = require('../middleware/500.js');
const requestTime = require('../middleware/timestamp');



//uses the object in the body of the request to create a new “record”
app.post('/products', (request, response) => {
  request.body = new Record
});


app.get('/products', (request, res) => {
  request.body = new Record;
});
// app.get('/products/:id', (req, res) => {})


// uses the object in the body to replace the record with the :id specified
// app.put('/products/:id', (req, res) => {})


//deletes the record with the :id specified
// app.delete('/products/:id', (req, res) => {}) … 

// uses the object in the body of the request to create a new “record”
// app.post('/categories', (req, res) => {})

// app.get('/categories', (req, res) => {})
// app.get('/categories/:id', (req, res) => {})


// uses the object in the body to replace the record with the :id specified
// app.put('/categories/:id', (req, res) => {})


//deletes the record with the :id specified
// app.delete('/categories/:id', (req, res) => {}) … 

function Record (get, put, post, delete) {
  let request = query;
}

module.exports = {
  start: port => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};


