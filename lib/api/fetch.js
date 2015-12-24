'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = undefined;

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _nativeOrBluebird = require('native-or-bluebird');

var _mashapeOauth = require('mashape-oauth');

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new _nativeOrBluebird.Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { _nativeOrBluebird.Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } step("next"); }); }; } /* eslint camelcase:0 */

var fetch = exports.fetch = (function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(path) {
    var appType, privateKey, privateKeyPass, privateCert, publicKey, consumerKey, consumerSecret, _apiConfig$appType, url, requestTokenUrl, accessTokenUrl, authorizeUrl, oauthVersion, encryptionType, oa, getRequestToken, getAuthorization, getAccessToken, requestWith, privateRequestWith;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            appType = this.appType;
            privateKey = this.privateKey;
            privateKeyPass = this.privateKeyPass;
            privateCert = this.privateCert;
            publicKey = this.publicKey;
            consumerKey = this.consumerKey;
            consumerSecret = this.consumerSecret;
            _apiConfig$appType = _config.apiConfig[appType];
            url = _apiConfig$appType.url;
            requestTokenUrl = _apiConfig$appType.requestTokenUrl;
            accessTokenUrl = _apiConfig$appType.accessTokenUrl;
            authorizeUrl = _apiConfig$appType.authorizeUrl;
            oauthVersion = _apiConfig$appType.oauthVersion;
            encryptionType = _apiConfig$appType.encryptionType;
            oa = new _mashapeOauth.OAuth({
              requestUrl: requestTokenUrl,
              accessUrl: accessTokenUrl,
              consumerKey: consumerKey,
              consumerSecret: consumerSecret,
              signatureMethod: encryptionType,
              version: oauthVersion
            });

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

            getAuthorization = function getAuthorization(_ref) {
              var requestToken = _ref.requestToken;
              var requestSecret = _ref.requestSecret;

              return (0, _requestPromise2.default)({
                url: authorizeUrl,
                qs: {
                  oauth_token: requestToken
                }
              });
            };

            getAccessToken = function getAccessToken(_ref2) {
              var requestToken = _ref2.requestToken;
              var requestSecret = _ref2.requestSecret;

              return new _nativeOrBluebird.Promise(function (resolve, reject) {
                if (!requestToken || !requestSecret) return reject('Missing params.');
                return oa.getOAuthAccessToken({
                  oauth_token: requestToken,
                  oauth_token_secret: requestSecret
                }, function (err, authToken, authSecret) {
                  if (err) return reject(err);
                  return resolve({
                    authToken: authToken,
                    authSecret: authSecret
                  });
                });
              });
            };

            requestWith = function requestWith(_ref3) {
              var requestToken = _ref3.requestToken;
              var requestSecret = _ref3.requestSecret;

              var requestOptions = Object.assign({
                url: url + '/' + path,
                type: 'application/json'
              }, {
                oauth_token: requestToken,
                oauth_token_secret: requestSecret
              });

              return new _nativeOrBluebird.Promise(function (resolve, reject) {
                return oa.get(requestOptions, function (err, resp) {
                  if (err) return reject(err);
                  return resolve(resp);
                });
              });
            };

            privateRequestWith = function privateRequestWith(_ref4) {
              var requestToken = _ref4.requestToken;
              var requestSecret = _ref4.requestSecret;

              var requestOptions = Object.assign({
                url: url + '/' + path,
                type: 'application/json'
              }, {
                oauth_token: requestToken,
                oauth_token_secret: requestSecret
              }, {
                pfx: privateCert,
                key: privateKey,
                passphrase: privateKeyPass,
                cert: publicKey
              });

              return requestToken, requestSecret, url, path;

              return new _nativeOrBluebird.Promise(function (resolve, reject) {
                return oa.get(requestOptions, function (err, resp) {
                  if (err) return reject(err);
                  return resolve(resp);
                });
              });
            };

            _context.next = 22;
            return getRequestToken();

          case 22:
            _context.t0 = _context.sent;
            _context.next = 25;
            return privateRequestWith(_context.t0);

          case 25:
            return _context.abrupt('return', _context.sent);

          case 26:
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