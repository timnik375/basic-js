const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  let turnsResult = Math.pow(2, disksNumber) - 1;
  let timeResult = Math.floor(turnsResult / (turnsSpeed / 3600));

  result.turns = turnsResult;
  result.seconds = timeResult

  return result
};
