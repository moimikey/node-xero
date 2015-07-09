import API           from './api'
import config        from './api/config'
import arrayContains from './util'

class Xero {
  constructor(options) {
    const {
      type,
      privateKey,
      publicKey,
      consumerKey,
      consumerSecret
    } = options || Object.create(null)

    if (!arrayContains(Object.keys(config), type)) {
      throw Error('A valid API type is required.')
    }

    return new API({
      type,
      privateKey,
      publicKey,
      consumerKey,
      consumerSecret,
    }).connect()
  }
}

export default Xero
