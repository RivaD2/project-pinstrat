'use strict';
const mongoose = require('mongoose');
const express = require('express');
const request = require('supertest');
const supergoose = require('@code-fellows/supergoose');
const fivehundred = require('../lib/middleware/500');

const app = express()
let router = express.Router();

describe('We are testing our 500 error message', () => {

  it("Checking the specs of the error 500", () => {
    expect(fivehundred).toHaveLength(4);

  });

});
