'use strict';

const mongoose = require('mongoose');

const server = require('./lib/server');
const debugLogger = require('./lib/debug/debug-logger');

server.start();
// debugLogger(0),
//Connect to Database
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology: true})
  .then(() =>
    console.log(`Listening on MongoDB...`)
    // debugLogger(1, 'Connected to MongoDB...')
  )
  .catch(err => console.error('Could not connect to MongoDB...',err));

//to gid rid of deprecation warning, I used mongoose.set
mongoose.set('useCreateIndex', true);
