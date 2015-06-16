'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.connector = connector;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _oauth = require('oauth');

var _oauth2 = _interopRequireDefault(_oauth);

function connector(options) {
  return function decorator(target) {
    target.Connector = {
      options: options,
      oauth: new _oauth2['default'].OAuth('https://api.twitter.com/oauth/request_token', 'https://api.twitter.com/oauth/access_token', 'your application consumer key', 'your application secret', '1.0A', null, 'HMAC-SHA1')
    };
  };
}

;