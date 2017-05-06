'use strict';
const Rules = {
    newline: /^(\r\n|\n)+/,
    header: /^(#{1,6}) *([^\n|^#]+)(?:\n+|$)*/,
};
module.exports = Rules;
