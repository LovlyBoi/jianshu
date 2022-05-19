import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
  },
  {
    path: '/follow',
    name: 'follow',
    component: () => import('@/views/FollowView.vue'),
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('@/views/MemberView.vue'),
  },
  {
    path: '/it',
    name: 'it',
    component: () => import('@/views/ITView.vue'),
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/MessageView.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  switch (to.fullPath) {
    case '/':
      store.commit('changeNavActive', 1)
      break
    case '/follow':
      store.commit('changeNavActive', 2)
      break
    case '/member':
      store.commit('changeNavActive', 3)
      break
    case '/it':
      store.commit('changeNavActive', 4)
      break
    case '/message':
      store.commit('changeNavActive', 5)
      break
    default:
      break
  }
})

export default router
