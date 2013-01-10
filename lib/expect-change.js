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
    this.assert(
      this.changeActualFrom !== this.changeActualTo,
      function() { return 'expected ' + this.changeActualFrom + ' to change to ' + this.changeActualTo; },
      function() { return 'expected ' + this.changeActualFrom + ' to not change to ' + this.changeActualTo; }
    );

    return extend(this, {
      to: to,
      from: from
    });
  };

  /**
   * Check if the value is changed to expectedTo
   * 
   * @param {Mixed} expectedTo
   * @api public
   */

  function to(expectedTo) {
    this.assert(
      this.changeActualTo === expectedTo,
      function() { return 'expected ' + this.changeActualTo + ' to change to ' + expectedTo; },
      function() { return 'expected ' + this.changeActualTo + ' to not change to ' + expectedTo; }
    );
    return this;
  }

  /**
   * Check if the value is changed from expectedFrom
   * 
   * @param {Mixed} expectedFrom
   * @api public
   */

  function from(expectedFrom) {
    this.assert(
      this.changeActualFrom === expectedFrom,
      function() { return 'expected ' + this.changeActualFrom + ' to change to ' + expectedFrom; },
      function() { return 'expected ' + this.changeActualFrom + ' to not change to ' + expectedFrom; }
    );
    return this;
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