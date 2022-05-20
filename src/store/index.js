import { createStore } from 'vuex'
import { getCache, setCache } from '@/utils/cahe'

export default createStore({
  state: {
    isLogin: !!getCache('token'),
  },
  getters: {},
  mutations: {
    changeLoginState(state, payload) {
      const { state: loginState, token } = payload
      if (loginState) {
        setCache('token', token)
      } else {
        setCache('token', '')
      }
      state.isLogin = loginState
    },
  },
  actions: {},
  modules: {},
})
