'use strict';
const assert = require('assert');
const {Parser} = require("../core");

describe("Parser", function() {
  describe("#parse", function() {
    context("with valid tokens", function() {
      const parser = new Parser([
        {
          type: 'newline',
        },
        {
          type: 'header',
          level: '1',
          text: 'Header1'
        },
        {
          type: 'header',
          level: '2',
          text: 'Header2'
        },
        {
          type: 'text',
          text: 'Text1'
        },
        {
          type: 'text',
          text: 'Text2'
        },
        {
          type: 'link',
          text: '1024',
          link: 'http://t66y.com'
        }
      ]);
      const res = parser.parse();
      it ("res is not empty", function() {
        assert(res.length, 'is empty');
      })
      it ("should be expect str", function() {
        const expect = [
          '<h1>Header1</h1>',
          '<h2>Header2</h2>',
          '<p>Text1</p>',
          '<p>Text2</p>',
          '<a href="http://t66y.com">1024</a>'
        ].join('\n');
        assert(res === expect, 'is not eq expect');
      })
    });
  });
});
