'use strict';

const assert = require('assert');

const {Lexical} = require('../core');

describe("Lexcial", function() {
  describe("#parse", function() {
    context("./doc/basic-syntax.md", function() {
      const lex = new Lexical("#### A\n##### B\n")
      lex.parse();
      it ("tokens not empty", function() {
        assert(lex._tokens.length > 0, 'not empty');
      })
      it ("two header tokens", function() {
        assert(lex._tokens.filter( t => t.type === 'header' ).length == 2, 'not eq 2');
      })
    });
  });
});
