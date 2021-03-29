const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  if(typeof sampleActivity !== 'string') {
    return false
  }

  sampleActivity = Number(sampleActivity);

  if (isNaN(sampleActivity)) {
    return false
  }

  if (sampleActivity < 1) {
    return false
  }

  if (sampleActivity > 15) {
    return false
  }

  let result = 0;
  let k = 0.693 / HALF_LIFE_PERIOD;

  result = Math.log(MODERN_ACTIVITY / sampleActivity) / k
  result = Math.ceil(result)

  return result
};
