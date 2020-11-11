'use strict';

const express = require('express');
const fivehundred = require('../lib/middleware/500');

describe('We are testing our 500 error message', () => {

  it("Checking the specs of the error 500", () => {
    expect(fivehundred).toHaveLength(4);

  });
});
