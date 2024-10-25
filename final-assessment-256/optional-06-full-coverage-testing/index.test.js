import { test } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

test("should sum correctly", () => {
  let A = 10;
  let B = 20;

  const actualResult = sum(A, B);

  const expectedResult = 30;
  assert.equal(actualResult, expectedResult);
});

test("should return zero if one of operator was string", () => {
  let A = "10";
  let B = 20;

  const actualResult = sum(A, B);

  const expectedResult = 0;
  assert.equal(actualResult, expectedResult);
});

test("should return zero if both operator was string", () => {
  let A = "10";
  let B = "20";

  const actualResult = sum(A, B);

  const expectedResult = 0;
  assert.equal(actualResult, expectedResult);
});

test("should return zero if one of operator less than zero", () => {
  let A = -10;
  let B = 20;

  const actualResult = sum(A, B);

  const expectedResult = 0;
  assert.equal(actualResult, expectedResult);
});

test("should return zero if both operator less than zero", () => {
  let A = -10;
  let B = -20;

  const actualResult = sum(A, B);

  const expectedResult = 0;
  assert.equal(actualResult, expectedResult);
});