'use strict';
function Parser(lex) {
  this._lex = lex;
};

Parser.prototype.parse = function() {
  const lex = this._lex;
  for (let i = 0; i < lex.length; ++i) {
    lex[i].type
  }
}
module.exports = Parser;
