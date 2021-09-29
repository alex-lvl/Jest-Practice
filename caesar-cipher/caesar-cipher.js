function caesarCipher(string, key) {
  let plainText = string;
  let ciphertext = '';

  for (let i = 0; i < plainText.length; i++) {
    if (!plainText[i].match(/[a-zA-Z]/)) {
      ciphertext += plainText[i];
    } else {
      let code = plainText.charCodeAt(i) - 97;
      let encryptionCalculation = (code + key) % 26;
      ciphertext += String.fromCharCode(encryptionCalculation + 97);
    }
  }
  
  // console.log(`\"${plainText}\" ciphers to : ${ciphertext}`);
  // console.log(`\"${ciphertext}\" deciphers to: ${plainText2}`);

  return ciphertext;
}

function decipher(cipherString, key) {
  // deciphering
  let plainText2 = '';
  for (let i = 0; i < cipherString.length; i++) {
    if (!cipherString[i].match(/[a-zA-Z]/)) {
      plainText2 += cipherString[i];
    } else {
      let code = cipherString.charCodeAt(i) - 97;
      let encryptionCalculation = (code - key) % 26;
      plainText2 += String.fromCharCode(encryptionCalculation + 97)
    }
  }

  return plainText2;
}

export { caesarCipher, decipher }

