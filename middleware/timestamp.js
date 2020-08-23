'use strict';

let date = new Date();

console.log(`the current date is ${date}`);

function requestTime (response, request, next) {
  return request.date;
}

module.exports = requestTime;