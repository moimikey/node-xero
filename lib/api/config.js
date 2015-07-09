'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  'public': {
    url: 'https://api.xero.com/api.xro/2.0',
    payroll: 'https://api.xero.com/payroll.xro/1.0',
    requestTokenUrl: 'https://api.xero.com/oauth/RequestToken',
    authorizeUrl: 'https://api.xero.com/oauth/Authorize',
    accessTokenUrl: 'https://api.xero.com/oauth/AccessToken',
    encryptionType: 'HMAC-SHA1',
    requiresConnection: true,
    requiresSigning: false,
    oauthVersion: '1.0A'
  },
  partner: {
    url: 'https://api-partner.network.xero.com/api.xro/2.0',
    payroll: 'https://api.xero.com/payroll.xro/1.0',
    requestTokenUrl: 'https://api-partner.network.xero.com/oauth/RequestToken',
    authorizeUrl: 'https://api.xero.com/oauth/Authorize',
    accessTokenUrl: 'https://api-partner.network.xero.com/oauth/AccessToken',
    encryption_type: 'RSA-SHA1',
    signatureMethod: 'RSA-SHA1',
    requiresConnection: true,
    requiresSigning: true,
    oauthVersion: '1.0A'
  },
  'private': {
    url: 'https://api.xero.com/api.xro/2.0',
    payroll: 'https://api.xero.com/payroll.xro/1.0',
    encryptionType: 'PLAINTEXT',
    signatureMethod: 'RSA-SHA1',
    requiresConnection: false,
    requiresSigning: true,
    oauthVersion: '1.0A'
  }
};
module.exports = exports['default'];