import {
  Accounting,
  Files,
  Payroll
} from '../api'

export class Auth {
  constructor(options) {
    Object.assign(this, options)
  }

  connect() {
    return {
      Accounting,
      Files,
      Payroll
    }
  }
}

/*
var _Xero = require('./');
var Xero = new _Xero({ type: 'something', privateKey: 'something' });
Xero
Xero.Accounting.getAccounts()

var createAccount = new Xero.API.Accounting.Accounts;
console.log(createAccount);
*/
