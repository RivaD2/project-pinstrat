'use strict';
const mongoose = require('mongoose');
const express = require('express');
const app = express()
let router = express.Router()
const port = process.env.PORT || 3001;
app.use(express.json());
require('dotenv').config();
app.use(router);
const request = require('supertest');
const collectionsRouter = require('../lib/router');

require('dotenv').config();
const supergoose = require('@code-fellows/supergoose');
const index = require('../lib/server');

describe('We can test our server.js paths and connections', () => {

  it('Server.js is able to communicate to our Mongo DB', () => {
    expect(mongoose.connection.readyState).toBe(1)
  });

  test('We will get a 404 error if we do not follow a set path', done => {
    request(app)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(404);
        done();
      });
  });

  it('Testing 500 error if we have no arguments', () => {

    expect(500);

  });

});

