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

    this.obj();
    this.changeActualTo = check();
    assert.call(this, this.changeActualFrom !== this.changeActualTo, this.changeActualFrom, this.changeActualTo);

    return extend(this, {
      to: to,
      from: from
    });
  };

  function to(expectedTo) {
    assert.call(this, this.changeActualTo === expectedTo, this.changeActualTo, expectedTo);
    return this;
  }

  function from(expectedFrom) {
    assert.call(this, this.changeActualFrom === expectedFrom, this.changeActualFrom, expectedFrom);
    return this;
  }

    function assert(result, a, b) {
      this.assert(
        result,
        function() { return 'expected ' + a + ' to change to ' + b; },
        function() { return 'expected ' + a + ' to not change to ' + b; }
      );
    }

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