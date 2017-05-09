'use strict';
const Rules = {
    newline: /^(\r\n|\n)+/,
    header: /^(#{1,6}) *([^\n|^#]+)(?:\n+|$)*/,
    link:   /^\[(.+?)\]\((.+?)\)(?:\n+|$)*/,
    text: /^[^\n]+/,
};
module.exports = Rules;
