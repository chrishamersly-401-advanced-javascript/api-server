'use strict';
//global variables
const express = require('express');

const errorHandler = require('../../middleware/500.js');
const notFoundHandler = require('../../middleware/404.js');

const categoryRouter = require('./categories.js');
const productRouter = require('./products.js');

const app = express();
app.use(express.json());

app.use('api/v2', categoryRouter);
app.use('api/v2', productRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);


module.exports = {
  start: port => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};


