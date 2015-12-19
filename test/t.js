/* eslint no-console:0 */
import { Xero } from '../src'
import { getTimestamp } from '../src/core/cache'
const config = {
  // appType: 'private',
  consumerKey: 'FBN4S4HPCBYQKZNCTGZB2SXWB0FZK2',
  // consumerSecret: 'ASKDD4H6ES4MU12HXNWWMZ8FJQIV1F',
  consumerSecret: 'ssl/privatekey.pem',
}

const totals = []
const seq = [1, 2, 7, 8, 9, 13, 14]
const xero = Xero(config)
seq.map(ms => {
  let start = null
  let end = null
  let total = null

  setTimeout(() => {
    start = getTimestamp()
    xero.fetch('Accounts').then(() => {
      end = getTimestamp()
      total = start - end
      totals.push(total)
      console.log(totals)
    })
  }, ms * 1000)
})
