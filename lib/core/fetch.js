'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = undefined;

var _fs = require('fs');

var _hasdom = require('hasdom');

var _nativeOrBluebird = require('native-or-bluebird');

var _mashapeOauth = require('mashape-oauth');

var _config = require('./config');

var _cache = require('./cache');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _nativeOrBluebird.Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _nativeOrBluebird.Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } step("next"); }); }; }

var fetch = exports.fetch = (function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(path) {
    var _appType, appType, consumerKey, consumerSecret, _apiConfig$appType, apiUrl, requestTokenUrl, accessTokenUrl, authorizeUrl, _apiConfig$appType$oa, oauthVersion, signatureMethod, oa, getRequestOptions, getRequestToken, getAccessToken, getAuthorization, requestPublic, requestPrivate, requestPartner;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _appType = this.appType;
            appType = _appType === undefined ? 'public' : _appType;
            consumerKey = this.consumerKey;
            consumerSecret = this.consumerSecret;
            _apiConfig$appType = _config.apiConfig[appType];
            apiUrl = _apiConfig$appType.apiUrl;
            requestTokenUrl = _apiConfig$appType.requestTokenUrl;
            accessTokenUrl = _apiConfig$appType.accessTokenUrl;
            authorizeUrl = _apiConfig$appType.authorizeUrl;
            _apiConfig$appType$oa = _apiConfig$appType.oauthVersion;
            oauthVersion = _apiConfig$appType$oa === undefined ? '1.0A' : _apiConfig$appType$oa;
            signatureMethod = _apiConfig$appType.signatureMethod;

            /**
             * `consumerSecret` is either a unique string (typical for a Public application)
             *  or a path to a local RSA Private Key file (.pem) (typical for a Private application)
             */

            oa = new _mashapeOauth.OAuth({
              requestUrl: requestTokenUrl,
              accessUrl: accessTokenUrl,
              consumerKey: consumerKey,
              consumerSecret: (0, _hasdom.hasDOM)() ? consumerSecret : (0, _fs.readFileSync)(consumerSecret),
              signatureMethod: signatureMethod,
              version: oauthVersion,
              headers: {
                'Accept': 'application/json',
                'Connection': 'close',
                'User-Agent': 'Mozilla/4.0 (compatible; MSIE 5.0; Windows 3.1)'
              }
            });

            /**
             * Extends URI options for API requests
             */

            getRequestOptions = function getRequestOptions() {
              for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
                options[_key] = arguments[_key];
              }

              return _extends.apply(undefined, [Object.create(null), {
                url: apiUrl + '/' + path
              }].concat(options));
            };

            /**
             * Returns a `requestToken` and `requestSecret`
             */

            getRequestToken = function getRequestToken() {
              return new _nativeOrBluebird.Promise(function (resolve, reject) {
                return oa.getOAuthRequestToken(function (err, requestToken, requestSecret) {
                  if (err) return reject(err);
                  return resolve({
                    requestToken: requestToken,
                    requestSecret: requestSecret
                  });
                });
              });
            };

            /**
             * Trades `requestToken` & `requestSecret` for `accessToken`.
             * `accessToken` expires after 30m from creation time.`
             *
             * If `accessToken` is cached, return it.
             * If `accessToken` is cached, but expired, fetch a new one!
             */

            getAccessToken = function getAccessToken() {
              if (_cache.CACHE.size && (0, _cache.getTimestamp)() < (0, _cache.lastInSet)(_cache.MAXAGE)) return _cache.CACHE.get((0, _cache.lastInSet)(_cache.AGE));
              return new _nativeOrBluebird.Promise(function (resolve, reject) {
                var CURRENT_TIME = (0, _cache.getTimestamp)();
                return oa.getOAuthAccessToken(function (err, accessToken) {
                  if (err) return reject(err);
                  _cache.CACHE.set(CURRENT_TIME, accessToken);
                  _cache.AGE.add(CURRENT_TIME);
                  _cache.MAXAGE.add(CURRENT_TIME + _cache.TIMEOUT);
                  return resolve({
                    accessToken: _cache.CACHE.get((0, _cache.lastInSet)(_cache.CACHE))
                  });
                });
              });
            };

            getAuthorization = function getAuthorization() {
              // todo
              // public
              return authorizeUrl;
            };

            /**
             * `public` API request
             */

            requestPublic = function requestPublic() {
              getRequestToken().then(getAuthorization).then(getAccessToken).then(function (accessToken) {
                var requestOptions = getRequestOptions({
                  access_token: accessToken
                });
                return new _nativeOrBluebird.Promise(function (resolve, reject) {
                  return oa.get(requestOptions, function (err, resp) {
                    if (err) return reject(err);
                    return resolve(JSON.parse(resp));
                  });
                });
              });
            };

            /**
             * `private` API request
             */

            requestPrivate = function requestPrivate() {
              var requestOptions = getRequestOptions({
                oauth_token: consumerKey
              });
              return new _nativeOrBluebird.Promise(function (resolve, reject) {
                return oa.get(requestOptions, function (err, resp) {
                  if (err) return reject(err);
                  return resolve(JSON.parse(resp));
                });
              });
            };

            /**
             * `partner` API request
             */

            requestPartner = function requestPartner() {
              // todo
            };

            _context.next = 22;
            return ({
              public: requestPublic,
              private: requestPrivate,
              partner: requestPartner
            })[appType]();

          case 22:
            return _context.abrupt('return', _context.sent);

          case 23:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetch(_x) {
    return ref.apply(this, arguments);
  };
})();