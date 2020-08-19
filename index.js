'use strict';

const mongoose = require('mongoose');
const server = require('./lib/server.js');


//need to change to make my own
// const MONGODB_URI ='mongo://localhost:27017/products';

// const mongooseOptions = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// };

// mongoose.connect(MONGODB_URI, mongooseOptions);
server.start(3000);
