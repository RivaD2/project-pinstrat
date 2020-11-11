'use strict';
const mongoose = require('mongoose');
const express = require('express');
const request = require('supertest');
const supergoose = require('@code-fellows/supergoose');
const fourOhFour = require('../lib/middleware/404');
var assert = require('assert');
const app = express()
let router = express.Router();

const res = {
  body: 'hi',
  message: 'world'
};


describe('Routing', function(){

  it('should go to 404 page', () => {
    expect(fourOhFour).toHaveLength(4);

  });

  it('should return 404 Not Found for missing resources', function() {
    expect(fourOhFour)
    {
      assert.equal(res.body.message, undefined);
    }
  });

});

