'use strict';
const httpMocks = require('node-mocks-http');
jest.mock('../lib/middleware/aync-wrapper')
const async = require('../lib/middleware/aync-wrapper')
const mockNext = jest.fn();

describe('We are performing mock crud operations to db from GameSchema', () => {


    test('Should call next() with no error when no error with 2 requests', async() => {
 

        const request = httpMocks.createRequest();
        const response = httpMocks.createResponse();

        async(request, response, mockNext);
        expect(mockNext.mock.calls.length).toBe(0);
    });


  it('Create a new Game Schema', () => {
    expect(async.mock.calls.length).toBe(1);
    /// undefined as it should be since the module is not named and only used in
    /// calls, not as a stand alone function
    /// Source
    /// https://stackoverflow.com/questions/39633919/cannot-mock-a-module-with-jest-and-test-function-calls
  });


});


