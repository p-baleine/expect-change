;(function() {

  var expect;

  if (typeof require === "function" &&
      typeof exports === "object" &&
      typeof module === "object") { // NodeJS
    expect = require("expect.js");
  } else { // Browser
    expect = this.expect;
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
      successMsg(this.changeActualFrom, this.changeActualTo),
      failureMsg(this.changeActualFrom, this.changeActualTo)
    );

    // return the extended Assertion obj
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
      successMsg(this.changeActualTo, expectedTo),
      failureMsg(this.changeActualTo, expectedTo)
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
      successMsg(this.changeActualFrom, expectedFrom),
      failureMsg(this.changeActualFrom, expectedFrom)
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

  /**
   * return the message on success
   * 
   * @param {Mixed} from
   * @param {Mixed} to
   * @api private
   */

  function successMsg(from, to) {
    return function() {
      return 'expected ' + from + ' to change to ' + to;
    };
  }

  /**
   * return the message on failure
   * 
   * @param {Mixed} from
   * @param {Mixed} to
   * @api private
   */

  function failureMsg(from, to) {
    return function() {
      return 'expected ' + from + ' to not change to ' + to;
    };
  }
 
})(this);