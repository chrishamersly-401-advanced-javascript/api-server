'use strict';
//global variables
const express = require('express');

require('dotenv').config();

// Express built in middle ware
// needs to happen before the routes are hit


const app = express();
const cors = require('cors');

app.use(express.json());
//setting up routes 
const productRouter = require('../lib/routes/products.js');
const categoryRouter = require('../lib/routes/categories.js');

//declaring middleware not throwing an error;
// const loggerMiddleware = require('../middleware/logger.js');
// const error500 = require('../middleware/500.js');
// const requestTime = require('../middleware/timestamp');
// const error404 = require('../middleware/404.js');

const logRequest = require('./middleware/logger.js')
const notFoundHandler = require('../middleware/404.js');
const errorHandler = require('../middleware/500.js');




//need to work these out throwing an error
// app.use('/api/v1/', productRoutes);
// app.use('/api/v1/', categoryRoutes);

app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  start: port => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};


