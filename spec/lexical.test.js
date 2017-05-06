'use strict';

const assert = require('assert');
const fs = require('fs');
const path =require('path');

const {Lexical} = require('../core');

describe("Lexcial", function() {
  describe("#parse", function() {
    context("headers", function() {
      const lex = new Lexical("#### A\n##### B\n")
      lex.parse();
      it ("tokens not empty", function() {
        assert(lex._tokens.length > 0, 'not empty');
      })
      it ("two header tokens", function() {
        assert(lex._tokens.filter( t => t.type === 'header' ).length == 2, 'not eq 2');
      })
    });
    context("./doc/basic-syntax.md", function() {
      const data = fs.readFileSync(path.join(__dirname, '../doc/basic-syntax.md')).toString();
      const lex = new Lexical(data);
      lex.parse();
      it ("three headers", function() {
        assert(lex._tokens.filter(t => t.type == 'header').length == 3, 'not eq 3');
      });
      it ("three text", function() {
        assert(lex._tokens.filter(t => t.type == 'text').length == 3, 'not eq 3');
      })
    })
  });
});
