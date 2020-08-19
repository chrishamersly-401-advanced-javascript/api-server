'use strict';

/*

Sends a 500/Server Error message as the response (does not call .next())
Import this into your server and set it up to be “used” as the last route

*/

module.exports = (err,req,res,next) => {
  console.log('You made a mistake');
  res.status(500);
  res.send('Maybe you meant to do something else');
};