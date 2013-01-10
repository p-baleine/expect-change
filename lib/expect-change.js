;(function(global) {

  var expect;

  if (typeof require === "function" &&
      typeof exports === "object" &&
      typeof module === "object") { // NodeJS
    expect = require("expect.js");
  } else { // Browser
    expect = global.expect;
  }

  // abort if `expect` dose not exist
  if (!expect || !expect.Assertion) { return; }

  /**
   * Check if the value is changed
   * 
   * @param {Function} check function to get the concerned value
   * @api public
   */

  expect.Assertion.prototype.change = function(check) {
    this.changeActualFrom = check();
    this.changeActualTo = undefined;

    function assert(result, a, b) {
      this.assert(
        result,
        function() { return 'expected ' + a + ' to change to ' + b; },
        function() { return 'expected ' + a + ' to not change to ' + b; }
      );
    }

    this.obj();
    this.changeActualTo = check();
    assert.call(this, this.changeActualFrom !== this.changeActualTo, this.changeActualFrom, this.changeActualTo);

    return extend(this, {

      to: function(changeTo) {
        assert.call(this, this.changeActualTo === changeTo, this.changeActualTo, changeTo);
        return this;
      },

      from: function(changeFrom) {
        assert.call(this, this.changeActualFrom === changeFrom, this.changeActualFrom, changeFrom);
        return this;
      }
    });
  };

  /**
   * return the extended src by add
   * 
   * @param {Object} src
   * @param {Object} add
   * @api private
   */

  function extend(src, add) {
    if (!add || typeof add !== 'object') return src;

    var key;
    for (key in add) {
      if (add.hasOwnProperty(key)) { src[key] = add[key]; }
    }
    return src;
  }
 
}(
  this,
  "undefined" !== typeof module ? module : {},
  "undefined" !== typeof exports ? exports : {}
));