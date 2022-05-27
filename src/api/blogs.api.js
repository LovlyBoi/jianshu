import request from '../network'

function getBlogs(ps, pn) {
  return request({
    method: 'GET',
    url: '/blogs',
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
    },
  })
}

function getBlogById(id) {
  return request({
    method: 'GET',
    url: `/blogs/${id}`,
  })
}

function getComments(id, ps, pn) {
  return request({
    method: 'GET',
    url: `/blogs/${id}/comments`,
    params: {
      ps,
      pn,
    },
  })
}

function publishComment(comment) {
  return request({
    method: 'POST',
    url: '/blogs/publishComment',
    data: {
      comment,
    },
  })
}

export { getBlogs, publishBlog, getBlogById, getComments, publishComment }
