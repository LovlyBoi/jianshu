import request from '../network'

function getBlogs(ps, pn) {
  return request({
    method: 'GET',
    url: '/blogs/getBlogs',
    params: {
      ps,
      pn,
    },
  })
}

function publishBlog(blog) {
  return request({
    method: 'POST',
    url: '/blogs/publishBlog',
    data: {
      blog,
    }
  })
}

export { getBlogs, publishBlog }
