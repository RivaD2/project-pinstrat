'use strict';
const supergoose = require('@code-fellows/supergoose');
const server = require('../lib/server');
const testServer = supergoose(server.app);
/*
- Route tests for our server
- Use the supergoose testing library
*/
describe('Testing the app', () => {

  it('should return a game', () => {
    setTimeout(() => {
      return testServer.get('/games')
        .then(res => {
          expect(res.body).toMatchObject([]);
          expect(res.status).toBe(200);
        }, 1000)})
  })
});
