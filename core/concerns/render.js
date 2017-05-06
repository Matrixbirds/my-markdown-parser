'use strict';
function Render(tokens) {
  if (!tokens || !tokens.length) throw Error("Tokens Empty Error");
  this.tokens = tokens;
  this.token = tokens[0];
  this.res = [];
};

Render.prototype.parse = function () {
  while(this.tokens.length) {
    this.token = this.tokens[0];
    if (typeof this[this.token.type] !== 'function') throw Error(`Unrecognized token type ${this.token.type}`)
    this.res.push(this[this.token.type]());
    this.tokens.shift();
  }
  return this.res.filter(s => s).join('\n');
};
let val;
Object.defineProperty(Render.prototype, 'token', {
  enumerable: true,
  get: () => val,
  set: (newVal) => {
    val = newVal;
  }
});

Render.prototype.header = function () {
  const {level, text} = this.token;
  const tag = `<h${level}>${text}</h${level}>`;
  return tag;
}

Render.prototype.newline = function () {
  return '';
}

Render.prototype.text = function() {
  const {text} = this.token;
  return `<p>${text}</p>`;
}
module.exports = Render;
