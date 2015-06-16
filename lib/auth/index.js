'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _config = require('./_config');

var _config2 = _interopRequireDefault(_config);

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

var Auth = (function () {
  function Auth(options) {
    _classCallCheck(this, Auth);

    _extends(this, options);
    console.log(this);
  }

  _createClass(Auth, [{
    key: 'connect',
    value: function connect() {
      return _api2['default'];
    }
  }]);

  return Auth;
})();

exports['default'] = Auth;

/*
var Xero = require('./');
var xero = new Xero({ type: 'something', privateKey: 'something' });
console.log(xero);
*/
module.exports = exports['default'];