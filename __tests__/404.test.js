'use strict';
const mongoose = require('mongoose');
const express = require('express');
const request = require('supertest');
const supergoose = require('@code-fellows/supergoose');
const fourOhFour = require('../lib/middleware/404');

const app = express()
let router = express.Router();

describe('We are testing our 404 error message', () => {

  it("should go to 404 page", () => {
    expect(fourOhFour).toHaveLength(4);

  });

});

