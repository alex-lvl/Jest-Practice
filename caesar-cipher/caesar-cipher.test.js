import { caesarCipher, decipher } from "./caesar-cipher";

let cipheredText = caesarCipher('Hello, World!', 1);

test('cipher \"Hello, World!\" to \"Ifmmp, Xpsme!\"', () => {
  expect(cipheredText).toBe('Ifmmp, Xpsme!');
})

test('decipher \"Ifmmp, Xpsme!\" to  \"Hello, World!\"', () => {
expect(decipher(cipheredText, 1)).toBe('Hello, World!');
})