'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Auth = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _api = require('../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Auth = exports.Auth = (function () {
  function Auth(options) {
    (0, _classCallCheck3.default)(this, Auth);

    (0, _assign2.default)(this, options);
  }

  (0, _createClass3.default)(Auth, [{
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

/*
var _Xero = require('./');
var Xero = new _Xero({ type: 'something', privateKey: 'something' });
Xero
Xero.Accounting.getAccounts()

var createAccount = new Xero.API.Accounting.Accounts;
console.log(createAccount);
*/