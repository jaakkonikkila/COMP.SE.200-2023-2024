import isEmpty from '../src/isEmpty.js';

describe('isEmpty function', () => {
  test('returns true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('returns true for true', () => {
    expect(isEmpty(true)).toBe(true);
  });

  test('returns true for number 1', () => {
    expect(isEmpty(1)).toBe(true);
  });

  test('returns false for a non-empty array', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test('returns false for a non-empty string', () => {
    expect(isEmpty('abc')).toBe(false);
  });

  test('returns false for a non-empty object', () => {
    expect(isEmpty({ 'a': 1 })).toBe(false);
  });

  test('returns true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('returns true for an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('returns true for an empty object', () => {
    expect(isEmpty({})).toBe(true);
  });
});