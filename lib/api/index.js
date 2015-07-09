'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _oauth = require('oauth');

var _oauth2 = _interopRequireDefault(_oauth);

var _accounting = require('./accounting');

var _accounting2 = _interopRequireDefault(_accounting);

var _files = require('./files');

var _files2 = _interopRequireDefault(_files);

var _payroll = require('./payroll');

var _payroll2 = _interopRequireDefault(_payroll);

var _authorize = require('./authorize');

var _authorize2 = _interopRequireDefault(_authorize);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var API = function API(options) {
  _classCallCheck(this, API);

  _extends(this, options, _config2['default'][options.type]);
  _extends(this, {
    oauth: new _oauth2['default'].OAuth(this.requestTokenUrl, this.accessTokenUrl, this.consumerKey, this.consumerSecret, this.oauthVersion, null, this.encryptionType)
  });
  _extends(this, {
    Accounting: _accounting2['default'],
    Files: _files2['default'],
    Payroll: _payroll2['default']
  });
};

exports['default'] = API

/*

var _Xero = require('./')
var Xero = new _Xero({ type: 'public' })

Xero
Xero.Accounting.getAccounts()

var createAccount = new Xero.API.Accounting.Accounts
console.log(createAccount)

*/
;
module.exports = exports['default'];