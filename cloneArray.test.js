const cloneArray = require('./cloneArray');
const arr = [10, 20, 30];
test('Clone array properly ', () => {
  expect(cloneArray(arr)).toStrictEqual(arr);
});
