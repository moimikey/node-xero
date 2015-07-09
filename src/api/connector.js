import OAuth  from 'oauth'
import Config from './config'

function connector(options) {
  // if options.public || options.private || options.partner
  //   Config['public'].host

  return function decorator(target) {
    Object.assign(target, {
      oauth: new OAuth.OAuth(
        'https://api.twitter.com/oauth/request_token',
        'https://api.twitter.com/oauth/access_token',
        'your application consumer key',
        'your application secret',
        '1.0A',
        null,
        'HMAC-SHA1'
      )
    })
  }
}

export default connector
