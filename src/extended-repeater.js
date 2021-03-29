const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  options.addition = String(options.addition);

  options.separator = options.separator || '+';
  options.additionSeparator = options.additionSeparator || '|';
  options.repeatTimes = options.repeatTimes || 1;
  options.additionRepeatTimes = options.additionRepeatTimes || 1;

  let arrStr = [];
  let arrAdd = [];
  let result = str;
  let resultAdd = '';

  if (options.repeatTimes) {
    for (let i = 1; i < options.repeatTimes + 1; i++) {
      arrStr.push(str)
    }
  }


  if (options.addition !== 'undefined') {
    for (let i = 1; i < options.additionRepeatTimes + 1; i++) {
      arrAdd.push(`${options.addition}`)
    }
  }

  if (options.additionSeparator) {
    resultAdd = arrAdd.join(`${options.additionSeparator}`)
  }



  arrStr.forEach((elem, index) => {
    arrStr[index] = arrStr[index] + resultAdd
  })

  if (options.separator) {
    result = arrStr.join(`${options.separator}`)
  }

  return result
};
  