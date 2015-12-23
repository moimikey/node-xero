export const lastInSet = set => [...set.keys()][[...set.keys()].length - 1]
export const getTimestamp = () => Math.floor((new Date()).getTime() / 1000)
export const CACHE = new Map()
export const MAXAGE = new Set()
export const AGE = new Set()
export const TIMEOUT = 30 * 60
