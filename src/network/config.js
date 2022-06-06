let TIMEOUT = 200000
let BASEURL = ''

if (process.env.NODE_ENV === 'production') {
  TIMEOUT = 200000
  BASEURL = 'http://123.57.238.32:8081/n/'
} else if (process.env.NODE_ENV === 'development') {
  TIMEOUT = 200000
  BASEURL = '/api'
}

export {
  TIMEOUT,
  BASEURL,
}
