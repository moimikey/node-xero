import * as tape from 'tape'
import { Xero } from '../src'

const CONSUMER_KEY = 'FBN4S4HPCBYQKZNCTGZB2SXWB0FZK2'
const CONSUMER_SECRET = 'ASKDD4H6ES4MU12HXNWWMZ8FJQIV1F'
const CONSUMER_SECRET_PEM = 'ssl/privatekey.pem'

tape.test('connection methods', t => {
  t.skip('...public', x => {
    const xero = Xero({
      appType: 'public',
      consumerKey: CONSUMER_KEY,
      consumerSecret: CONSUMER_SECRET
    })
    xero.fetch('Accounts')
    .then(resp => {
      x.equal(typeof resp, 'object')
      x.end()
    })
    .catch(err => {
      Error(err)
      x.end()
    })
  })
  t.skip('...partner', x => {})
  t.test('...private', x => {
    const xero = Xero({
      appType: 'private',
      consumerKey: CONSUMER_KEY,
      consumerSecret: CONSUMER_SECRET_PEM
    })
    xero.fetch('Accounts')
    .then(resp => {
      x.equal(typeof resp, 'object')
      x.end()
    })
    .catch(err => {
      Error(err)
      x.end()
    })
  })
})

tape.test('fetch', t => {
  const xero = Xero({
    appType: 'private',
    consumerKey: CONSUMER_KEY,
    consumerSecret: CONSUMER_SECRET_PEM
  })

  t.test('...returns an object', x => {
    xero.fetch('Accounts')
    .then(resp => {
      x.equal(typeof resp, 'object')
      x.end()
    })
    .catch(err => {
      Error(err)
      x.end()
    })
  })

  t.test('...returns 69 entries', x => {
    xero.fetch('Accounts')
    .then(resp => {
      x.equal(resp.Accounts.length, 69)
      x.end()
    })
    .catch(err => {
      Error(err)
      x.end()
    })
  })
})
