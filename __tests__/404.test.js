'use strict';

const supergoose = require('@code-fellows/supergoose');
const fourOhFour = require('../lib/middleware/404');
const testServer = supergoose(server.app);


describe('We are testing our 404 error message', () => {
  it("should go to 404 page", () => {
    return testServer.get('/foo/bar')
    .expect(fourOhFour).toEqual('Not Found');

  });

});

