import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView,
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/follow',
    name: 'follow',
    component: () => import('@/views/FollowView.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('@/views/MemberView.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/it',
    name: 'it',
    component: () => import('@/views/ITView.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/MessageView.vue'),
    meta: {
      keepAlive: false,
    },
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
    meta: {
      keepAlive: true,
    },
  },
  {
    path: '/writer',
    name: 'writer',
    component: () => import('@/views/WriterView.vue'),
    meta: {
      keepAlive: true,
    },
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
