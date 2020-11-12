'use strict';

const mongoose = require('mongoose');
const logger = require('./lib/middleware/presentation-logger')
const server = require('./lib/server');

server.start();
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    logger(0)
  )
  .catch(err => console.error('Could not connect to MongoDB...', err));
mongoose.set('useCreateIndex', true);