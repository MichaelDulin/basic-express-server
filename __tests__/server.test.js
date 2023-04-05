"use strict";

const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);

describe("Testing express server", () => {
  test("404 with bad route", async () => {
    const res = await request.get('/noPersonHere');
    expect(res.status).toEqual(404);
  });
  test("404 with bad method", async () => {
    const res = await request.post('/person');
    expect(res.status).toEqual(404);
  });
  test("500 with no name found", async () => {
    const res = await request.get('/person');
    expect(res.status).toEqual(500);
  });
  test("200 with name found", async () => {
    const res = await request.get('/person?name=x');
    expect(res.status).toEqual(200);
  });
  test("Correct name was found", async () => {
    const res = await request.get('/person?name=y');
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({"name": "y"});
  });
});
