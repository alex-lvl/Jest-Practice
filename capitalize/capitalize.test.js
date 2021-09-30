import { capitalize } from './capitalize';

test('this string will capitalize the first letter', () => {
  expect(capitalize('jessica')).toBe('J');
});
