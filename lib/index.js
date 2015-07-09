'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _api = require('./api');

var _api2 = _interopRequireDefault(_api);

var _apiConfig = require('./api/config');

var _apiConfig2 = _interopRequireDefault(_apiConfig);

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var Xero = function Xero(options) {
  _classCallCheck(this, Xero);

  var _ref = options || Object.create(null);

  var type = _ref.type;
  var privateKey = _ref.privateKey;
  var publicKey = _ref.publicKey;
  var consumerKey = _ref.consumerKey;
  var consumerSecret = _ref.consumerSecret;

  if (!(0, _util2['default'])(Object.keys(_apiConfig2['default']), type)) {
    throw Error('A valid API type is required.');
  }

  return new _api2['default']({
    type: type,
    privateKey: privateKey,
    publicKey: publicKey,
    consumerKey: consumerKey,
    consumerSecret: consumerSecret
  }).connect();
};

exports['default'] = Xero;
module.exports = exports['default'];