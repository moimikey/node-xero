import Config from './_config';
import API    from '../api';

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
var Xero = require('./');
var xero = new Xero({ type: 'something', privateKey: 'something' });
console.log(xero);
*/
