const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length
  },
  addLink(value) {
    this.chain.push(`( ${value} )`)

    return this
  },
  removeLink(position) {

    if (position%1 === 0) {
      this.chain = this.chain.filter((el, i) =>  i+1 !== position)
      return this
    } else {
      this.chain = []
      throw new Error('invalid position')
    }
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result = this.chain.join('~~')
    this.chain = []

    return result
  }
};

module.exports = chainMaker;
