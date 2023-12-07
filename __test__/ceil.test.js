import ceil from '../src/ceil.js';

describe('ceil function', () => {
  test('rounds up a number without precision', () => {
    expect(ceil(4.006)).toBe(5);
  });

  test('rounds up a number with precision of 2', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
  });

  test('rounds up a number with negative precision', () => {
    expect(ceil(6040, -2)).toBe(6100);
  });

  test('rounds up a negative number without precision', () => {
    expect(ceil(-4.006)).toBe(-4);
  });

  test('rounds up a negative number with precision of 2', () => {
    expect(ceil(-6.004, 2)).toBe(-6);
  });

  test('rounds up a negative number with negative precision', () => {
    expect(ceil(-6040, -2)).toBe(-6000);
  });
});