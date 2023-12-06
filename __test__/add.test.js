import add from '../src/add.js';

describe('add function', () => {
  test('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(6, -4)).toBe(2);
  });

  test('adds two negative numbers', () => {
    expect(add(-6, -4)).toBe(-10);
  });

  test('adds zero to a number', () => {
    expect(add(6, 0)).toBe(6);
  });

  test('adds a decimal number and an integer', () => {
    expect(add(6.5, 4)).toBe(10.5);
  });

  test('adds two decimal numbers', () => {
    expect(add(3.3, 2.2)).toBeCloseTo(5.5); // Using toBeCloseTo for floating point comparison
  });
});