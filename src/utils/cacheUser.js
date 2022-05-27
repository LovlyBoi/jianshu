import { setCache } from './cahe'

function cahceUser(user) {
  setCache('user', user)
}

function unCacheUser() {
  setCache('user', {})
}

export {
  cahceUser,
  unCacheUser,
}
