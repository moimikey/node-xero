import * as API from '../api';

class Auth {
  constructor(options) {
    Object.assign(this, options);
  }

  connect() {
    return API;
  }
}

export default Auth;

/*
var xero = require('./');
var Xero = new xero({ type: 'something', privateKey: 'something' });
var createAccount = new Xero.API.Accounting.Accounts;
console.log(createAccount);
*/
