import { createStore } from 'vuex'
import { publishBlog } from '@/api'
import { getCache } from '@/utils/cahe'
import { cahceUser, unCacheUser } from '@/utils/cacheUser'
import { cahceToken, unCacheToken } from '@/utils/cacheToken'

export default createStore({
  state: {
    user: {
      isLogin: !!getCache('token'),
      userId: getCache('user')?.userId || 0,
      username: getCache('user')?.username || '',
      avatar: getCache('user')?.avatar || 'https://joeschmoe.io/api/v1/random'
    },
    blog: {
      // 编辑区文章
      article: '',
      // 编辑区文章 HTML
      articleHTML: '',
      title: '',
    },
  },
  getters: {},
  mutations: {
    // 改变登录状态
    changeLoginState(state, payload) {
      const { state: loginState, token, userId, username, avatar } = payload

      if (loginState) {
        cahceToken(token)
        state.user.userId = userId
        state.user.username = username
        state.user.avatar = avatar
        // 用户信息持久化
        cahceUser({ userId, username, avatar })
      } else {
        unCacheToken()
        unCacheUser()
      }

      state.user.isLogin = loginState
    },
    // 保存编辑区文章到vuex
    saveArticle(state, payload) {
      const { article, render } = payload
      state.blog.article = article
      state.blog.articleHTML = render
    },
  },
  actions: {
    // 发布文章到服务器
    async publishArticle({ state }, payload) {
      const { title } = payload
      const blog = {
        article: state.blog.articleHTML,
        title,
        userId: state.user.userId,
        username: state.user.username,
      }
      console.log('发布：', blog)
      return publishBlog(blog)
    },
  },
  modules: {},
})
