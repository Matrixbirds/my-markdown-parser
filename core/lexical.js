'use strict';
function Lexical(src, config) {
  this._src = src;
  this._config = config || null;
  this._tokens = [];
  this._rules = require('./concerns/rules');
};
Lexical.prototype.parse = function() {
  let src = this._src;
  const rules = this._rules;

  while (src) {
    console.log(char);
    if (char = rules.newline.exec(src)) {
      this.tokens.push({
        type: 'newline'
      });
      char = char.substring(char[0].length) //offset
    }

    if (char = rules.header.exec(src)) {
      this.tokens.push({
        type: 'header',
        level: char[1].length,
        text: char[2],
      });
      char = char.substring(char[0].length);
      continue;
    }
  }
};
module.exports = Lexical;
