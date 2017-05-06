'use strict';

const assert = require('assert');

const [fs, path] = [require('fs'), require('path')];

const Render = require("../core/concerns/render");
const {Lexical} = require('../core');

const data = fs.readFileSync(path.join(__dirname, '../doc/basic-syntax.md')).toString();


describe('my-markdown-parser', function() {
  describe('parser', function() {
    const lexcial = new Lexical(data);
    lexcial.parse();
    const render = new Render(lexcial._tokens);
    const res = render.parse();
    const expect = [
      '<h1>h1</h1>',
      '<h2>h2</h2>',
      '<p>  1024</p>',
      '<p>  2048</p>',
      '<h6>h6</h6>',
      '<p>  1024 2048</p>',
    ].join("\n");
    it ('should eq expect', function() {
      const util = require("util");
      console.log('res', util.inspect(res), '\n');
      console.log('exs',util.inspect(expect));
      assert(res === expect, 'not eq expect');
    });
  })
})
