'use strict';


module.exports = (request,response,next) => {
  console.log('Unknown Route');
  response.status(404);
  response.send('you seem to have made a mistake');
  response.end();
};