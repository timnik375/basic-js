const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct = true) {
    this._reverse = !direct;
  }

  encrypt(str, key) {
    let result = '';
    let j = 0;

    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() > 64 && str[i].charCodeAt() < 91) {
        let strI = str[i].charCodeAt() - 65;
        let keyI = key[j % key.length].charCodeAt() - 65;
        let currentLetter = (strI + keyI)%26;

        result += String.fromCharCode(currentLetter + 65);

        j++;
      } else {
        result += str[i]
      }
    }

    if (this._reverse === true) {
      result = result.split('').reverse().join('')
    }

    return result
  }

  decrypt(str, key) {
    let result = '';
    let j = 0;

    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt() > 64 && str[i].charCodeAt() < 91) {
        let strI = str[i].charCodeAt() - 65;
        let keyI = key[j % key.length].charCodeAt() - 65;
        let currentLetter = (strI - keyI + 26)%26;

        result += String.fromCharCode(currentLetter + 65);

        j++;
      } else {
        result += str[i]
      }
    }

    if (this._reverse === true) {
      result = result.split('').reverse().join('')
    }

    return result
  }
}

module.exports = VigenereCipheringMachine;
