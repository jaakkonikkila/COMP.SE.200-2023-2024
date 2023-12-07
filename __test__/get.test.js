import get from '../src/get.js';

describe('get function', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }] };

  test('gets value at a specified path', () => {
    expect(get(object, 'a[0].b.c')).toBe(3);
  });

  test('gets value using an array path', () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3);
  });

  test('returns default value if path not found', () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default');
  });

  test('returns undefined if object is null', () => {
    expect(get(null, 'a.b.c')).toBeUndefined();
  });

  test('returns default value if object is null', () => {
    expect(get(null, 'a.b.c', 'default')).toBe('default');
  });

  test('returns default value if resolved value is undefined', () => {
    expect(get(object, 'x.y.z', 'default')).toBe('default');
  });
});