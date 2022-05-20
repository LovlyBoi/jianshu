import request from '../network'

function login(username, password) {
  return request({
    method: 'POST',
    url: '/user/login',
    data: { username, password },
  })
}

function register(username, password) {
  return request({
    method: 'POST',
    url: '/user/register',
    data: { username, password },
  })
}

export {
  login,
  register,
}
