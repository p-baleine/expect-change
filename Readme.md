# expect-change [![Build Status](https://travis-ci.org/p-baleine/expect-change.png?branch=master)](https://travis-ci.org/p-baleine/expect-change)

Change assertion extension for expect.js

```javascript
var cnt = 0;
    
expect(function() { cnt = 101; }).to
    .change(function() { return cnt; });

var cnt = 0;

expect(function() { cnt = 101; }).to
    .change(function() { return cnt; }).from(0).to(101);

var cnt = 0;

expect(function() {    
  expect(function() { cnt = 0; }).to
      .change(function() { return cnt; });
}).to.throwException();

var cnt = 0;
    
expect(function() {
  expect(function() { cnt = 101; }).to.not
      .change(function() { return cnt; });
}).to.throwException();
```

## How to use

### Node

Install `expect.js` and `expect-change` with NPM or add it to your package.json:

```js
$ npm install expect.js expect-change.js
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
