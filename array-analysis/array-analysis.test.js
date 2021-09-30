import { analyze } from "./array-analysis";

test('array analysis should be avg: 2.5, min: 1, max: 4, length: 4', () => {
  expect(analyze([1,2,3,4])).toEqual({ avg: 2.5, min: 1, max: 4, length: 4 })
});