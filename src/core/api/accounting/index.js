// import { readFileSync } from 'fs'
// import { hasDOM } from 'hasdom'
// import { Promise } from 'native-or-bluebird'
// import { OAuth } from 'mashape-oauth'
// import { apiConfig } from './config'
import { CRUD } from '../CRUD'
class Accounting extends CRUD {
  constructor() {
    super()
    console.log('Accounting!')
  }
}
export const accounting = Reflect.construct(Accounting)
