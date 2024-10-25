import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test("shoudld sum properly", () => {
  const A = 1;
  const B = 1;

  const result = sum(A, B);

  const expectedResult = 2;
  assert.equal(result, expectedResult);
});