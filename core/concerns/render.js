'use strict';
function Render() {};

Render.prototype.header = function () {
  const {level, text} = this.token['meta'];
  const tag = `<h${level}>${text}</h${level}>`;
  return tag;
}

Render.prototype.newline = function () {
  return '\n';
}
module.exports = Render;
