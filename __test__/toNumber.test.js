import toNumber from '../src/toNumber.js';

describe('toNumber function', () => {
  test('converts a decimal number to a number', () => {
    expect(toNumber(3.2)).toBe(3.2);
  });

  test('converts Number.MIN_VALUE to a number', () => {
    expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
  });

  test('converts Infinity to a number', () => {
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  test('converts a string representation of a number to a number', () => {
    expect(toNumber('3.2')).toBe(3.2);
  });

  test('handles converting a string with leading/trailing whitespace to a number', () => {
    expect(toNumber('  3.2  ')).toBe(3.2);
  });

  test('converts binary strings to numbers', () => {
    expect(toNumber('0b101')).toBe(5);
  });

  test('converts octal strings to numbers', () => {
    expect(toNumber('0o10')).toBe(8);
  });

  test('returns NaN for bad signed hexadecimal string values', () => {
    expect(toNumber('-0x12')).toBeNaN();
  });

  test('returns NaN for symbols', () => {
    expect(toNumber(Symbol())).toBeNaN();
  });

  test('returns the input value for non-convertible values', () => {
    expect(toNumber('randomString')).toBeNaN();
    expect(toNumber({ a: 1 })).toEqual(NaN);
  });
});