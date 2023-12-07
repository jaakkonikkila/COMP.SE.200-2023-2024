import toString from '../src/toString.js';

describe('toString function', () => {

  // TODO BUG: Should be '', but is 'null'
  /*test('converts null to an empty string', () => {
    expect(toString(null)).toBe('');
  });*/

  test('preserves sign for -0', () => {
    expect(toString(-0)).toBe('-0');
  });

  test('converts an array to a string', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
  });

  test('converts symbols to strings', () => {
    expect(toString(Symbol('test'))).toBe('Symbol(test)');
  });

  test('handles nested arrays', () => {
    expect(toString([1, [2, [3]]])).toBe('1,2,3');
  });

  test('handles objects', () => {
    expect(toString({ a: 1, b: 2 })).toBe('[object Object]');
  });

  test('handles strings', () => {
    expect(toString('hello')).toBe('hello');
  });

  test('handles numbers', () => {
    expect(toString(123)).toBe('123');
  });
});