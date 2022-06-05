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

function modifyUsername(username, id) {
  return request({
    method: 'POST',
    url: '/user/modifyUsername',
    data: {
      username,
      id,
    },
  })
}

function modifyAvatar(id, img) {
  const formdata = new FormData()
  formdata.append('file', img)
  return request({
    url: '/user/modifyAvatar',
    method: 'post',
    data: formdata,
    params: { id },
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export { login, register, modifyUsername, modifyAvatar }
