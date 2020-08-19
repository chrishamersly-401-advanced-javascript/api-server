'use strict';
//global variables
const express = require('express');
require('dotenv').config();
const app = express();

//Need to use it as well
const fruitRouter = require('./routes.js');

//global middleware
// gets in front of all the requests and will inspect for a body as well and parse the information as needed.
app.use(express.json());

// this will register the middleware
app.use(logRequest);

app.get(getBrowser);

//needs to be below the app.use(express.json)
app.use(fruitRouter);


function logRequest(request, response, next) {
  console.log('Now we are cooking with gas');
  next();
}

function getBrowser(request, response, next) {
  request.browser = request.headers['user-agent'];
  next();
}

module.exports = {
  start: port => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }, 
};