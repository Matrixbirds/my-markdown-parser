'use strict';
function Lexical(src, config) {
  this._src = src;
  this._config = config || null;
  this._tokens = [];
  this._rules = require('./concerns/rules');
};
Lexical.prototype.parse = function() {
  let src = this._src,
      link;
  const rules = this._rules;
  var char;

  while (src) {
    if (char = rules.newline.exec(src)) {
      this._tokens.push({
        type: 'newline'
      });
      src = src.substring(char[0].length) //offset
    }

    if (char = rules.header.exec(src)) {
      if (link = rules.link.exec(char[2])) {
        this._tokens.push({
          type: 'header_link',
          header: {
            level: char[1].length
          },
          link: {
            text: link[1],
            link: link[2]
          }
        })
      }
      else {
        this._tokens.push({
          type: 'header',
          level: char[1].length,
          text: char[2],
        });
      }
      src = src.substring(char[0].length);
      continue;
    }

    if (char = rules.link.exec(src)) {
      this._tokens.push({
        type: 'link',
        text: char[1],
        link: char[2]
      });
      src = src.substring(char[0].length);
      continue;
    }

    if (char = rules.text.exec(src)) {
      this._tokens.push({
        type: 'text',
        text: char[0]
      });
      src = src.substring(char[0].length);
      continue;
    }
  }
};
module.exports = Lexical;
