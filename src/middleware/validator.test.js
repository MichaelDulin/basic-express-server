"use strict";

const validator = require("./validator");

describe("Testing validator", () => {
  test("Checking validity of response with validator", () => {
    const req = {
      query: {
        name: 'michael'
      }
    };
    const res = {};
    const next = jest.fn();

    validator(req, res, next);
    expect(req.query.name).toEqual('michael');
    expect(next).toHaveBeenCalled();
  });

  test('no name in validaor', () => {
    const request = {query: {}};
    const response = {};
    const next = jest.fn();
    validaor(request, response, next);
    expect(next).toHaveBeenCalledWith('Error: no name found');
  });
});
