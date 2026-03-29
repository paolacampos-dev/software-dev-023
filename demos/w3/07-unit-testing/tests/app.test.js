//test for app.js units

//unit testing --> we make sure a given code block (function) behaves in the same way regardless of the values we use in it: pure functions
//in our add(), we expect the values to be added

//I don't need the full vitest folder, just some methods in it
//I can specify what to import using {} --> destructuring
import { expect, test, describe } from "vitest";

//remember to export what you want to import
import { add, multiply } from "../app.js";

//sum tests

describe("Sum tests", function () {
  test("sum 1", function () {
    const result = add(2, 3);
    const expected = 5;

    expect(result).toBe(expected);
  });

  test("sum 2", function () {
    const result = add(6, 9);
    const expected = 15;

    expect(result).toBe(expected);
  });

  test("sum strings", function () {
    const result = add("2", 6);
    const expected = "26";

    expect(result).toBe(expected);
  });
});

//to run this test, add the following script to package.json
//"test": "vitest",

//multiply tests

describe("Multiply tests", function () {
  test("multiply 1", function () {
    const result = multiply(4, 6);
    const expected = 24;

    expect(result).toBe(expected);
  });
  test("multiply 2", function () {
    const result = multiply(-5, 10);
    const expected = -50;

    expect(result).toBe(expected);
  });
});
