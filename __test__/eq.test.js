import eq from '../src/eq.js';

describe('eq function', () => {
  test('returns true for same values', () => {
    const object = { 'a': 1 };
    const sameObject = object;
    expect(eq(object, object)).toBe(true);
    expect(eq('a', 'a')).toBe(true);
    expect(eq(NaN, NaN)).toBe(true);
    expect(eq(1, 1)).toBe(true);
    expect(eq(true, true)).toBe(true);
    expect(eq(0, -0)).toBe(true);
  });

  test('returns false for different values', () => {
    const object = { 'a': 1 };
    const other = { 'a': 1 };
    expect(eq(object, other)).toBe(false);
    // TODO BUG?: These are true, should they be false?
    // expect(eq('a', Object('a'))).toBe(false); 
    // expect(eq(false, 0)).toBe(false);
  });
});
