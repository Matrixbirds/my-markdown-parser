'use strict';
function Parser(tokens) {
  if (!tokens || !tokens.length) throw Error("Tokens Empty Error");
  this.tokens = tokens;
  this.res = [];
};

Parser.prototype.parse = function () {
  while(this.tokens.length) {
    this.token = this.tokens[0];
    if (typeof this[this.token.type] !== 'function') throw Error(`Unrecognized token type ${this.token.type}`)
    this.res.push(this[this.token.type]());
    this.tokens.shift();
  }
  return this.res.filter(s => s).join('\n');
};
let val;
Object.defineProperty(Parser.prototype, 'token', {
  enumerable: true,
  get: () => val,
  set: (newVal) => {
    val = newVal;
  }
});

Parser.prototype.header = function () {
  const {level, text} = this.token;
  const tag = `<h${level}>${text}</h${level}>`;
  return tag;
}

Parser.prototype.newline = function () {
  return '';
}

Parser.prototype.text = function() {
  const {text} = this.token;
  return `<p>${text}</p>`;
}
module.exports = Parser;
