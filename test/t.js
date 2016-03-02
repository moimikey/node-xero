/* eslint no-console:0 */
import { Xero } from '../src'
import { getTimestamp } from '../src/core/cache'
const config = {
  appType: 'private',
  consumerKey: 'FBN4S4HPCBYQKZNCTGZB2SXWB0FZK2',
  // consumerSecret: 'ASKDD4H6ES4MU12HXNWWMZ8FJQIV1F',
  consumerSecret: 'ssl/privatekey.pem',
}

const xero = Xero(config)

 aids() {
  return await xero.fetch('Accounts')
}
