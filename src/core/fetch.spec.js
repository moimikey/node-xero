/* eslint no-unused-vars:0 */
import * as tap from 'tap'
import { Xero } from '..'

const TEST_ACCOUNT_ID = 'ceef66a5-a545-413b-9312-78a53caadbc4'

tap.test('Private API', x => {
  const CONSUMER_KEY = 'IDJSQZVIXROGTRAECPDJQS0VNGYHNH'
  const CONSUMER_SECRET_PEM = 'ssl/privatekey.pem'
  const CONSUMER_SECRET = 'BDDYKXRI7E3BICLHNWIFU9E0LREQH0'

  const xero = Xero({
    appType: 'private',
    consumerKey: CONSUMER_KEY,
    consumerSecret: CONSUMER_SECRET_PEM
  })

  x.test('constructor', y => {
    y.equal(typeof xero, 'object', 'creates a Xero instance')
    y.end()
  })

  x.test('Accounts', async y => {
    const resp = await xero.fetch('Accounts')
    y.type(resp, 'object', 'returns an object')
    y.equal(resp.Accounts.length, 69, 'with 69 entries')
    y.end()
  })

  x.test('Accounts (single)', async y => {
    const resp = await xero.fetch(`Account/${TEST_ACCOUNT_ID}`)
    y.type(resp.Accounts, 'object', 'returns an object')
    y.equal(resp.Accounts.length, 1, 'with 1 entry')
    y.equal(resp.Accounts[0].AccountID, TEST_ACCOUNT_ID, 'of the given AccountID')
    y.end()
  })

  x.test('Contacts', async y => {
    const resp = await xero.fetch(`Contacts`)
    y.type(resp.Contacts, 'object', 'returns an object')
    y.equal(resp.Contacts.length, 48, 'with 48 entries')
    y.end()
  })

  x.test('Invoices', async y => {
    y.end()
  })

  x.test('Users', async y => {
    y.end()
  })

  x.end()
})

// describe('Public API', async test => {
//   const CONSUMER_KEY = 'A0VRABPEJG6VPF99QUBS0TTNTG2U3K'
//   const CONSUMER_SECRET = 'EVQK43ZEYF9HMK8X2LGHZ1YQP2GZMG'
//   const xero = Xero({
//     appType: 'public',
//     consumerKey: CONSUMER_KEY,
//     consumerSecret: CONSUMER_SECRET
//   })
//   console.error(xero)
//   test.equal(typeof xero, 'object')
//   const resp = await xero.fetch('Accounts')
//   // resp.then(function() {
//   //   console.error('worked...?')
//   // })
//   // .catch(function(err) {
//   //   console.error('aids!')
//   //   console.error(err)
//   // })
//   // test.equal(true, true)
//   // test.equal(typeof resp, 'object')
//   // test.equal(resp.Accounts.length, 69)
//   // test.end()
// })
