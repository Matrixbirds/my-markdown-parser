'use strict';
const Rules = {
    newline: /(\r\n|\n)+/,
    header: /^#{1,6} ([^\n|^\r\n|^\r]*)/,
};
module.exports = Rules;
