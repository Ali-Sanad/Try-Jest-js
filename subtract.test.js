const subtract = require('./subtract');

test('Subtract two numbers', () => {
  expect(subtract(5, 10)).toBe(-5);
});
