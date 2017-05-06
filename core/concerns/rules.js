'use strict';
const Rules = {
    newline: /(\r\n|\n)+/,
    header: /(^#{1,6})\s+([^(\n|\r\n|\r)]+)/,
};
module.exports = Rules;
