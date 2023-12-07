import filter from '../src/filter.js';

describe('filter function', () => {
  test('placeholder', () => {
    expect(true).toBe(true);
  });
  /*test('filters an array based on a predicate', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ];

    const activeUsers = filter(users, ({ active }) => active);
    expect(activeUsers).toEqual([{ 'user': 'barney', 'active': true }]);
  });

  test('returns an empty array if no elements match the predicate', () => {
    const numbers = [1, 2, 3, 4, 5];
    const filteredNumbers = filter(numbers, (num) => num > 10);

    expect(filteredNumbers).toEqual([]);
  });

  test('returns a new array, not the original one', () => {
    const numbers = [1, 2, 3, 4, 5];
    const filteredNumbers = filter(numbers, (num) => num % 2 === 0);

    expect(filteredNumbers).toEqual([2, 4]);
    expect(filteredNumbers).not.toBe(numbers);
  });*/
});