import OAuth from 'oauth';

export function connector(options) {
  return function decorator(target) {
    target.connector = {
      _types: options,
      _oauth: new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        'your application consumer key',
        'your application secret',
        '1.0A',
        null,
        'HMAC-SHA1'
      )
    }
  }
};
