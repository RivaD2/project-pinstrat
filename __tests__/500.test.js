'use strict';

const supergoose = require('@code-fellows/supergoose');
const fivehundred = require('../lib/middleware/500');
const testServer = supergoose(server.app);

//may need test server in this file
describe('We are testing our 500 error message', () => {
  it("Checking the specs of the error 500", () => {
    expect(fivehundred).toHaveLength(4);
  });
});
