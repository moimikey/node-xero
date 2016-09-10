# node-xero
An ES2015/JS SDK for Xero. Webpack, Browserify & Node.js friendly.

# Features
- Super lightweight
- Browserify, Webpack & Node friendly
- Support for multiple environments (node.js and browser)
- Connectivity for all three API types (public, private, partner)
- Promises/A+ (async/await! callback free!)
- Simple API

# Notes
A Xero app can be of **three** types:

**Public** applications authenticate with a **3-way** OAuth handshake, therefore this would generally be for a **web application**, where end **in-browser** interaction is necessary to authorize a connection to your Xero app.

**Private** applications authenticate with a **2-way** OAuth handshake, therefore this would generally be for a **server side or CLI application** where end user interaction is **not** required. Instead of providing a `consumerSecret` string, a valid RSA private key path should be provided and used to authenticate with its respective public key that was uploaded to your Xero application's organization.

**Partner** applications authenticate with ...


# Creating certs for Private applications
```sh
openssl genrsa -out privatekey.pem 1024
openssl req -new -x509 -key privatekey.pem -out publickey.cer -days 1825
openssl pkcs12 -export -out public_privatekey.pfx -inkey privatekey.pem -in publickey.cer
```

## You can then confirm the validity of your private key
```sh
openssl rsa -text -in privatekey.pem
```

# Usage
## Create an instance
```js
const config = {
  appType: 'private', // or `public`, or `partner`
  consumerKey: 'FXN4S4HPXBYQKZNCTGZX2SXWB0FXK2',
  consumerSecret: 'ssl/privatekey.pem', // or an actual `consumerSecret` if `appType` is `public`
}
const xero = Xero(config)
```

## A-la-carte endpoint requests
```js
const orgs = await xero.fetch('Organisations')
xero.fetch('Accounts').then(console.log).catch(console.error)
xero.fetch('Accounts/85e4524f-5d17-4bb8-b616-7a11d9d077ab').then(console.log).catch(console.error)
xero.fetch('Accounts/85e4524f-5d17-4bb8-b616-7a11d9d077ab', { method: 'DELETE' ).then(console.log).catch(console.error)
```
