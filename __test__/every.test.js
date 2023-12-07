import every from '../src/every.js';

describe('every function', () => {
  test('returns true for an array where all elements satisfy the predicate', () => {
    const isEven = (num) => num % 2 === 0;
    expect(every([2, 4, 6, 8], isEven)).toBe(true);
  });

  test('returns false for an array where not all elements satisfy the predicate', () => {
    const isEven = (num) => num % 2 === 0;
    expect(every([1, 2, 3, 4], isEven)).toBe(false);
  });

  test('returns true for an empty array', () => {
    const isEven = (num) => num % 2 === 0;
    expect(every([], isEven)).toBe(true);
  });

  test('handles truthy/falsy values as predicates', () => {
    const isTruthy = (val) => val;
    expect(every([true, 1, 'yes'], isTruthy)).toBe(true);

    const isFalsy = (val) => !val;
    expect(every([true, 1, null, 'yes'], isFalsy)).toBe(false);
  });
});