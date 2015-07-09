'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _api = require('../api');

var Auth = (function () {
  function Auth(options) {
    _classCallCheck(this, Auth);

    _extends(this, options);
  }

  _createClass(Auth, [{
    key: 'connect',
    value: function connect() {
      return {
        Accounting: _api.Accounting,
        Files: _api.Files,
        Payroll: _api.Payroll
      };
    }
  }]);

  return Auth;
})();

exports.Auth = Auth;

/*
var _Xero = require('./');
var Xero = new _Xero({ type: 'something', privateKey: 'something' });
Xero
Xero.Accounting.getAccounts()

var createAccount = new Xero.API.Accounting.Accounts;
console.log(createAccount);
*/