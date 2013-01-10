# expect-change-extension

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
