# nd-view

[![Travis](https://img.shields.io/travis/ndfront/nd-view.svg?style=flat-square)](https://github.com/ndfront/nd-view)
[![Coveralls](https://img.shields.io/coveralls/ndfront/nd-view.svg?style=flat-square)](https://github.com/ndfront/nd-view)
[![NPM version](https://img.shields.io/npm/v/nd-view.svg?style=flat-square)](https://npmjs.org/package/nd-view)

> simple view with actions.

## 安装

```bash
$ npm install nd-view --save
```

## 使用

```js
var __ = require('nd-i18n');
var View = require('nd-view');

// use View
new View({
  actions: [{
    role: 'back',
    text: __('返回')
  }, {
    role: 'forward',
    text: __('前进')
  }]
})
.on('back', function() {
  // do something
})
.on('forward', function() {
  // do something
})
.render();
```
