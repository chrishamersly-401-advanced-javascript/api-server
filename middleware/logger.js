'use strict';

/*
 
 Execute a console.log() containing the request path, method, and the requestTime property of the request object

 Import this into your server and set it up to run at the application level for all routes

 */

const requestTime = require('./timestamp.js');

function loggerMiddleWare (request, reponse, next) {
  // console.log$(request.path, 'method', requestTime);
}
 
loggerMiddleWare();

module.exports = loggerMiddleWare();

