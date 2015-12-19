'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = connect;

var _oauth = require('oauth');

var _oauth2 = _interopRequireDefault(_oauth);

var _config = require('./config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function connect() {
  var appType = this.appType;
  var privateKey = this.privateKey;
  var publicKey = this.publicKey;
  var consumerKey = this.consumerKey;
  var consumerSecret = this.consumerSecret;
  var privateKeyPath = this.privateKeyPath;
  var sslCertPath = this.sslCertPath;
  var _apiConfig$appType = _config.apiConfig[appType];
  var url = _apiConfig$appType.url;
  var requestTokenUrl = _apiConfig$appType.requestTokenUrl;
  var accessTokenUrl = _apiConfig$appType.accessTokenUrl;
  var oauthVersion = _apiConfig$appType.oauthVersion;
  var encryptionType = _apiConfig$appType.encryptionType;

  this.urlPrefix = url;

  // check for validity of these args

  var connectionObj = {
    oauth: new _oauth2.default.OAuth(requestTokenUrl, accessTokenUrl, consumerKey, consumerSecret, oauthVersion, null, encryptionType)
  };

  return connectionObj;
}