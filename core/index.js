'use strict';

const Core = {};

const fs = require('fs');
const path = require('path');

function camelCase(str) {
  const words = string => string.match(/\w+/g) || [];
  return words(`${str}`).reduce((res, word, i) => {
    word = word[0].toUpperCase() + word.slice(1).toLowerCase()
    return res + word
  }, '');
}

fs.readdirSync(path.join(__dirname))
  .filter(file => file.slice(-3) == '.js' && file != path.basename(__filename))
  .forEach(file => {
    Core[camelCase(file.split('.js')[0])] = require(`./${file}`)
  })

module.exports = Core;
