'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _oauth = require('oauth');

var _oauth2 = _interopRequireDefault(_oauth);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function connector(options) {
  // if options.public || options.private || options.partner
  //   Config['public'].host

  return function decorator(target) {
    _extends(target, {
      oauth: new _oauth2['default'].OAuth('https://api.twitter.com/oauth/request_token', 'https://api.twitter.com/oauth/access_token', 'your application consumer key', 'your application secret', '1.0A', null, 'HMAC-SHA1')
    });
  };
}

exports['default'] = connector;
module.exports = exports['default'];