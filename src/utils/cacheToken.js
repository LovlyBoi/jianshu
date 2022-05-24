import { setCache } from './cahe'

function cahceToken(token) {
  setCache('token', token)
}

function unCacheToken() {
  setCache('token', '')
}

export {
  cahceToken,
  unCacheToken,
}
