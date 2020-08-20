'use strict';

/*
 
 Execute a console.log() containing the request path, method, and the requestTime property of the request object

 Import this into your server and set it up to run at the application level for all routes

 */

// const requestTime = require('./timestamp.js');

module.exports = (req, res, next) => {
  console.log('__REQUEST__', req.method, req.path);
  next();
};
 




