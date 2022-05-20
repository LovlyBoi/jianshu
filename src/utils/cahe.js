function setCache(key, value = '') {
  return localStorage.setItem(key, JSON.stringify(value))
}

function getCache(key) {
  const value = localStorage.getItem(key)
  return value == null ? value : JSON.parse(value)
}

export {
  setCache,
  getCache,
}
