'use strict';
const mongoose = require("mongoose");


require('dotenv').config();
const supergoose = require('@code-fellows/supergoose');
const server = require('../lib/server');

beforeAll(async () => {
    const url = process.env.TEST_MONGODB_URI;
    await mongoose.createConnection(url,{useNewUrlParser:true, useUnifiedTopology: true});
  });
  
  describe('We can connect to Mongo DB at index.js', () => {
    it('We can test our connection to Mongo DB', () => {
      expect(mongoose.connection.readyState).toBe(1)
    });
  
    it('We can close our connection to Mongose DB as needed.', () => {
      mongoose.connection.close();
      expect(mongoose.connection.readyState).toBe(0)
    });
  });
