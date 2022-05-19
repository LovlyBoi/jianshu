import { createStore } from 'vuex'
import { getCache } from '@/utils/cahe'

export default createStore({
  state: {
    isLogin: !!getCache('token'),
  },
  getters: {},
  mutations: {
    changeLoginState(state, loginState) {
      state.isLogin = loginState
    },
  },
  actions: {},
  modules: {},
})
