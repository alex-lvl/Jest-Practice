import { Calculator } from './calculator';

test('add 2 + 2 to equal 4', () => {
  expect(new Calculator(2, 2).add()).toBe(4);
});

test('subtract 14 - 7 to equal 7', () => {
  expect(new Calculator(14, 7).subtract()).toBe(7);
});

test('divide 3 / 1 to equal 3', () => {
  expect(new Calculator(3, 1).divide()).toBe(3);
});

test('multiply 10 * 10 to equal 100', () => {
  expect(new Calculator(10, 10).multiply()).toBe(100);
});
