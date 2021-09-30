import { reverseString } from './reverse-string';

test('reverses hello world to dlrow olleh', () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});
