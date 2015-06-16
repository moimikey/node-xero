'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var Xero = function Xero(options) {
  _classCallCheck(this, Xero);

  var _ref = options || Object.create(null);

  var type = _ref.type;
  var privateKey = _ref.privateKey;
  var publicKey = _ref.publicKey;
  var consumerKey = _ref.consumerKey;
  var consumerSecret = _ref.consumerSecret;

  this.API = new _auth2['default']({
    type: type,
    privateKey: privateKey,
    publicKey: publicKey,
    consumerKey: consumerKey,
    consumerSecret: consumerSecret
  }).connect();
};

exports['default'] = Xero;
module.exports = exports['default'];