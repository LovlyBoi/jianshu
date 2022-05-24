import { setCache } from './cahe'

function cahceUser({ userId, username }) {
  setCache('userId', userId)
  setCache('username', username)
}

function unCacheUser() {
  setCache('userId', '')
  setCache('username', '')
}

export {
  cahceUser,
  unCacheUser,
}
