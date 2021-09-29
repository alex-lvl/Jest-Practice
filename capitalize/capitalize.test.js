import { capitalize } from './capitalize';
// const capitalize = require('./capitalize');

test('this string will capitalize the first letter', () => {
  expect(capitalize('jessica')).toBe('J');
});