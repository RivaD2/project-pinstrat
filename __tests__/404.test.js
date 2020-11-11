'use strict';
const fourOhFour = require('../lib/middleware/404');

describe('We are testing our 404 error message', () => {

  it("should go to 404 page", () => {
    expect(fourOhFour).toHaveLength(4);

  });

});
