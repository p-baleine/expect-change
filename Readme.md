# expect-change [![Build Status](https://travis-ci.org/p-baleine/expect-change.png?branch=master)](https://travis-ci.org/p-baleine/expect-change)

Change assertion extension for expect.js

```js
// sample obj
var counter = {
  increment: function() {
    this.counter = this.counter || 0;
    this.counter += 1;
  },
  count: function() {
    return (this.counter = this.counter || 0);
  }
};

// expectation
expect(function() { counter.increment(); })
    .to.change(function() { return counter.count(); }).from(0).to(1);
```

## How to use

### Node

Install `expect.js` and `expect-change` with NPM or add it to your package.json:

```js
$ npm install expect.js expect-change
```

Then:

```js
var expect = require('expect.js'),
    expectChange = require('expect-change');
```

### Browser

Include script tag after `expect.js`

```html
<script src="expect.js"></script>
<script src="expect-change.js"></script>
```

## API

**change**: check if the value is changed

**to**: check if the value is changed to expected value

**from**: heck if the value is changed from expected value
