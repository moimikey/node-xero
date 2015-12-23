import * as core from './core'
export function Xero(config) {
  return Object.assign(
    Object.create(null),
    config,
    core
  )
}
