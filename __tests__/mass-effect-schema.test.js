'use strict';
jest.mock('../lib/models/mass-effect-model')
const GameSchema = require('../lib/models/mass-effect-model')

describe('We are performing mock crud operations to db from GameSchema', () => {

  it('Create a new Game Schema', () => {
    jest.spyOn(GameSchema.prototype, 'save')
      .mockImplementationOnce(() => GameSchema.reject('fail update mock service'))
  });


});
