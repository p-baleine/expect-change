
/**
 * Module dependencies.
 */

var expect = require("expect.js"),
    expectChangeExtension = require("../lib/expect-change-extension");

describe("expect-change-extension", function() {
  it("change interface should be exist", function() {
    expect(expect().change).to.be.a(Function);
  });

  it("should not raise error when there is change", function() {
    expect(function() {
      var cnt = 0;
      expect(function() { cnt = 101; }).to
          .change(function() { return cnt; });
    }).to.not.throwException();;
  });

  it("should raise error when there is no change", function() {
    expect(function() {
      var cnt = 0;
      expect(function() { cnt = 0; }).to
          .change(function() { return cnt; });
    }).to.throwException();;
  });
});