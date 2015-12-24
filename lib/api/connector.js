'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _oauth = require('oauth');

var _oauth2 = _interopRequireDefault(_oauth);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connector(options) {
  // if options.public || options.private || options.partner
  //   Config['public'].host

  return function decorator(target) {
    (0, _assign2.default)(target, {
      oauth: new _oauth2.default.OAuth('https://api.twitter.com/oauth/request_token', 'https://api.twitter.com/oauth/access_token', 'your application consumer key', 'your application secret', '1.0A', null, 'HMAC-SHA1')
    });
  };
}

exports.default = connector;