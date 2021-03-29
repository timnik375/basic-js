const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.levels = 1
  }

  calculateDepth(arr) {
    let depth = 0;

    arr.forEach((elem) => {
      if (elem instanceof Array) {
        depth++
      }
    })

    arr = arr.flat(1)

    if (depth > 0)  {
      this.levels++
      return this.calculateDepth(arr)
    } else {
      let temp = this.levels;
      this.levels = 1
      return temp
    }
  }
};