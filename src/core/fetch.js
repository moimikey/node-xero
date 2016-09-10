/* eslint no-console:0,no-unused-vars:0 */
import { readFileSync } from 'fs'
import { hasDOM } from 'hasdom'
import { OAuth } from 'mashape-oauth'
import { default as url } from 'url'
import { default as assert } from 'assert'
import { default as Promise } from 'bluebird'
import { apiConfig } from './config'
import { CACHE,
         AGE,
         MAXAGE,
         TIMEOUT,
         getTimestamp,
         lastInSet
} from './cache'
export async function fetch(path, type='get', query=Object.create(null)) {
  const {
    appType = 'private',
    consumerKey,
    consumerSecret
  } = this

  const {
    apiUrl,
    requestTokenUrl,
    accessTokenUrl,
    authorizeUrl,
    oauthVersion = '1.0A',
    signatureMethod
  } = apiConfig[appType]

  /**
   * `consumerSecret` is either a unique string (typical for a Public application)
   *  or a path to a local RSA Private Key file (.pem) (typical for a Private application)
   */
  const oa = new OAuth({
    requestUrl: requestTokenUrl,
    accessUrl: accessTokenUrl,
    consumerKey,
    consumerSecret: hasDOM() || 'public' === appType ? consumerSecret
                                                     : readFileSync(consumerSecret),
    signatureMethod,
    version: oauthVersion,
    headers: {
      'Accept': 'application/json',
      'User-Agent': 'Mozilla/4.0 (compatible; MSIE 5.0; Windows 3.1)'
    }
  })

  /**
   * Extends URI options for API requests
   */
  const getRequestOptions = (...options) => {
    return Object.assign(Object.create(null), {
      url: `${apiUrl}/${path}` + url.format({ query })
    },
    ...options)
  }

  /**
   * Returns a `requestToken` and `requestSecret`
   */
  const getRequestToken = () => {
    // console.error('getRequestToken')
    // return Promise.try(oa.getOAuthRequestToken).then((err, requestToken, requestSecret) => {
    //   requestToken, requestSecret
    // })
  }

  /**
   * Trades `requestToken` & `requestSecret` for `accessToken`.
   * `accessToken` expires after 30m from creation time.`
   *
   * If `accessToken` is cached, return it.
   * If `accessToken` is cached, but expired, fetch a new one!
   */
  const getAccessToken = () => {
    // console.error('getAccessToken')
    // if (CACHE.size && getTimestamp() < lastInSet(MAXAGE)) return CACHE.get(lastInSet(AGE))
    // return new Promise((resolve, reject) => {
    //   const CURRENT_TIME = getTimestamp()
    //   return oa.getOAuthAccessToken((err, accessToken) => {
    //     if (err) return reject(err)
    //     CACHE.set(CURRENT_TIME, accessToken)
    //     AGE.add(CURRENT_TIME)
    //     MAXAGE.add(CURRENT_TIME + TIMEOUT)
    //     return resolve({
    //       accessToken: CACHE.get(lastInSet(CACHE))
    //     })
    //   })
    // })
  }

  const getAuthorization = () => {
    console.error('getAuthorization!')
    // todo
    // public
    return authorizeUrl
  }

  /**
   * `public` API request
   */
  const requestPublic = () => {
    // console.error('requestPublic')
    // return getRequestToken().then(function() {
    //   console.log('yay')
    // }).catch(function(err) {
    //   console.log('awww...', err)
    // })
    // .then(getAuthorization)
    // .then(getAccessToken)
    // .then(accessToken => {
    //   const requestOptions = getRequestOptions({
    //     access_token: accessToken
    //   })
    //   return new Promise((resolve, reject) => {
    //     return oa.get(requestOptions, (err, resp) => {
    //       if (err) return reject(err)
    //       return resolve(JSON.parse(resp))
    //     })
    //   })
    // })
  }

  /**
   * `private` API request
   */
  const requestPrivate = oauth => {
    assert(typeof type, 'string')
    const requestOptions = getRequestOptions({
      oauth_token: consumerKey
    })
    const processErrors = err => {
      if (!err.data) return err

      const ErrorMessages = []

      if (err.statusCode === 500) {
        ErrorMessages.push('Internal Server Error')
        return ErrorMessages
      }

      let {ErrorNumber, Type, Message, Elements} = JSON.parse(err.data)

      if (!Elements) {
        ErrorMessages.push(Message)
        return ErrorMessages
      }

      Elements.forEach(Element => {
        return Element.ValidationErrors.forEach(Err => {
          ErrorMessages.push(Err.Message)
        })
      })

      return ErrorMessages
    }
    return Promise.promisify(oauth[type.toLowerCase()], { context: oauth })(requestOptions)
      .then(JSON.parse)
      .catch(processErrors)
  }

  /**
   * `partner` API request
   */
  const requestPartner = () => {
    // todo
  }

  return await {
    public: requestPublic,
    private: requestPrivate,
    partner: requestPartner
  }[appType](oa)
}
