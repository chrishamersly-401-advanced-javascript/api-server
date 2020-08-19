'use strict';

/*

Sends a 404/Not-Found message as the response (does not call .next())
Import this into your server and set it up to be “used” after your other routes

*/

module.exports = (request,response,next) => {
  console.log('Unknown Route');
  response.status(404);
  response.send('you seem to have made a mistake');
  response.end();
};