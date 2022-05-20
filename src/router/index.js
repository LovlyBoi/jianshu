import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'
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
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/UserView.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/views/LoginView.vue'),
      },
      {
        path: 'register',
        component: () => import('@/views/RegisterView.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  // 如果已经登陆，不允许跳转到登录页面
  if (/^\/user/.test(to.fullPath)) {
    if (store.state.isLogin) {
      return false
    }
    if (to.fullPath === '/user') {
      return '/user/login'
    }
  }
})

export default router
