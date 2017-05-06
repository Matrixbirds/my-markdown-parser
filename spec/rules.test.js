'use strict';
const assert = require('assert');

const Rules = require('../core/concerns/rules');

describe("Rules", function() {
  describe(".newline", function() {
    it("truthly", function() {
      assert(Rules.newline.exec("\r\n"), 'regex exec fail');
    })
    it("falsy ", function() {
      assert(!Rules.newline.exec("a\r\n"), 'regex exec fail');
    })
  });
  describe('.header', function() {
    context("truthy case 1:", function() {
      const _str = "##### A B\nA\tB";
      const _val = Rules.header.exec(_str);
      it("_val[0]", function() {
        assert(_val[0] === "##### A B\n", "not eq '##### A B\n'");
      });
      it("_val[1]", function() {
        assert(_val[1] === "#####", "not eq '#####'");
      });
      it("_val[2]", function() {
        assert(_val[2] === "A B", "not eq 'A B'");
      });
    })
    context("truthy case 2:", function() {
      const _str = "#####\tA\tB\nB";
      const _val = Rules.header.exec(_str);
      it("_val truthy", function() {
        assert(_val, 'not truthy');
      })
      it("_val[0]", function() {
        assert(_val[0] === "#####\tA\tB\n", "not eq '#####\tA\tB\n'");
      });
      it("_val[1]", function() {
        assert(_val[1] === "#####", 'not eq #####');
      });
      it("_val[2]", function() {
        assert(_val[2] === "	A	B", "not eq '	A	B'");
      });
    })
    context("truthy case 3:", function() {
      const _str = "##### \t A\t B\nC";
      const _val = Rules.header.exec(_str);
      it("_val truthy", function() {
        assert(_val, 'not truthy');
      })
      it("_val[0]", function() {
        assert(_val[0] === "##### \t A\t B\n", "not eq '##### \tA\t B\n'");
      });
      it("_val[1]", function() {
        assert(_val[1] === "#####", "not eq '#####'");
      });
      it("_val[2]", function() {
        assert(_val[2] === "	 A	 B", "not eq '	 A	 B'");
      });
    })

    context("falsy", function() {
      context("case 1:", function() {
        const _str = "###########";
        const _val = Rules.header.exec(_str);
        it("_val falsy", function() {
          assert(!_val, 'not falsy');
        })
      });
      context("case 2:", function() {
        const _str = "\t";
        const _val = Rules.header.exec(_str);
        it("_val falsy", function() {
          assert(!_val, 'not falsy');
        })
      });
      context("case 3:", function() {
        const _str = "#\nF";
        const _val = Rules.header.exec(_str);
        it("_val falsy", function() {
          assert(!_val, 'not falsy');
        })
      });
    });
  })
});
