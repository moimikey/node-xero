import OAuth      from 'oauth'

import Accounting from './accounting'
import Files      from './files'
import Payroll    from './payroll'

import authorize  from './authorize'
import config     from './config'

class API {
  constructor(options) {
    Object.assign(this, options, config[options.type])
    Object.assign(this, {
      oauth: new OAuth.OAuth(
        this.requestTokenUrl,
        this.accessTokenUrl,
        this.consumerKey,
        this.consumerSecret,
        this.oauthVersion,
        null,
        this.encryptionType
      )
    })
    Object.assign(this, {
      Accounting,
      Files,
      Payroll
    })
  }
}

export default API

/*

var _Xero = require('./')
var Xero = new _Xero({ type: 'public' })

Xero
Xero.Accounting.getAccounts()

var createAccount = new Xero.API.Accounting.Accounts
console.log(createAccount)

*/
