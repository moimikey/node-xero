import Auth from './auth';

class Xero {
  constructor(options) {
    const {
      type,
      privateKey,
      publicKey,
      consumerKey,
      consumerSecret
    } = options || Object.create(null);

    this.API = new Auth({
      type,
      privateKey,
      publicKey,
      consumerKey,
      consumerSecret
    }).connect();
  }
}

export default Xero;
