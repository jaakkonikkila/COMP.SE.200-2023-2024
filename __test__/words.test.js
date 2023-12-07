import words from '../src/words.js';

describe('words function', () => {
  test('splits string into an array of words using default pattern', () => {
    const result = words('fred, barney, & pebbles');
    expect(result).toEqual(['fred', 'barney', 'pebbles']);
  });

  test('splits string into an array of words using custom pattern', () => {
    const result = words('fred, barney, & pebbles', /[^, ]+/g);
    expect(result).toEqual(['fred', 'barney', '&', 'pebbles']);
  });

  test('handles an empty string', () => {
    const result = words('');
    expect(result).toEqual([]);
  });

  test('handles a string with no word', () => {
    const result = words('      ');
    expect(result).toEqual([]);
  });

  test('handles a string with special characters as words', () => {
    const result = words('!@#$%^&*()', /[!@#$%^&*()]+/g);
    expect(result).toEqual(['!@#$%^&*()']);
  });
});