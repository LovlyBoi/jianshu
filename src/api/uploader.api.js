import request from '@/network'

function uploadImg(img) {
  const formdata = new FormData()
  formdata.append('file', img)
  return request({
    url: '/upload/img',
    method: 'post',
    data: formdata,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

function uploadMarkdown() {}

export { uploadImg, uploadMarkdown }
