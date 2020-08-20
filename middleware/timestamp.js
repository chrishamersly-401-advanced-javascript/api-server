'use strict';

/* 
 
 Put the current timestamp (formatted like a proper date) on the request object in a property called requestTime
// Import this into your server and set it up to run at the application level for all routes

*/

let date = new Date();

console.log(`the current date is ${date}`);

function requestTime (response, request, next) {
  return request.date;
}

module.exports = requestTime;