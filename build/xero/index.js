(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Accounting = {
  a: 'Accounting'
};

exports['default'] = Accounting;
module.exports = exports['default'];

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Files = {
  a: 'Files'
};

exports['default'] = Files;
module.exports = exports['default'];

},{}],3:[function(require,module,exports){
'use strict';

var Accounting = require('./accounting');
var Files = require('./files');
var Payroll = require('./payroll');

var API = function API() {
  return {
    Accounting: Accounting,
    Files: Files,
    Payroll: Payroll
  };
};

module.exports = API;

},{"./accounting":1,"./files":2,"./payroll":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Payroll = {
  a: 'Payroll'
};

exports['default'] = Payroll;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
'use strict';

var Auth = {
  a: 'Auth'
};

module.exports = Auth;

},{}],6:[function(require,module,exports){
'use strict';

var API = require('./api');
var Auth = require('./auth');

module.exports = function () {
  return {
    API: API,
    Auth: Auth
  };
};

},{"./api":3,"./auth":5}],7:[function(require,module,exports){
'use strict';

var Xero = require('./src');

var Blah = function Blah() {
  console.log('BLAH');
};

module.exports = Blah;

},{"./src":6}]},{},[7]);
