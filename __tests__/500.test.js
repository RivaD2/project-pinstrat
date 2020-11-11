'use strict';
const mongoose = require('mongoose');
const express = require('express');
const request = require('supertest');
const supergoose = require('@code-fellows/supergoose');
const fivehundred = require('../lib/middleware/500');
var assert = require('assert');

const app = express()
let router = express.Router();

const res = {
  body: 'hi',
  message: 'world'
};


describe('We are testing our 500 error message', () => {

  it("Checking the specs of the error 500", () => {
    expect(fivehundred).toHaveLength(4);

  });

  it('should return 505 Not Found for missing resources', function() {
    expect(fivehundred)
    {
      assert.equal(res.body.message, undefined);
    }
  });

});
