import { createStore } from 'vuex'

export default createStore({
  state: {
    navActiveIdx: 1,
  },
  getters: {},
  mutations: {
    changeNavActive(state, idx) {
      state.navActiveIdx = idx
    },
  },
  actions: {},
  modules: {},
})
