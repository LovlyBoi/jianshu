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
      auth: false,
    },
  },
  {
    path: '/follow',
    name: 'follow',
    component: () => import('@/views/FollowView.vue'),
    meta: {
      keepAlive: false,
      auth: false,
    },
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('@/views/MemberView.vue'),
    meta: {
      keepAlive: false,
      auth: false,
    },
  },
  {
    path: '/it',
    name: 'it',
    component: () => import('@/views/ITView.vue'),
    meta: {
      keepAlive: false,
      auth: false,
    },
  },
  {
    path: '/message',
    name: 'message',
    component: () => import('@/views/MessageView.vue'),
    meta: {
      keepAlive: false,
      auth: false,
    },
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('@/views/ArticleView.vue'),
    meta: {
      keepAlive: false,
      auth: false,
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
        meta: {
          keepAlive: true,
          auth: false,
        },
      },
      {
        path: 'register',
        component: () => import('@/views/RegisterView.vue'),
        meta: {
          keepAlive: true,
          auth: false,
        },
      },
    ],
    meta: {
      keepAlive: false,
      auth: false,
    },
  },
  {
    path: '/writer',
    name: 'writer',
    component: () => import('@/views/WriterView.vue'),
    meta: {
      keepAlive: true,
      auth: false,
    },
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('@/views/SettingView.vue'),
    meta: {
      keepAlive: false,
      auth: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      keepAlive: false,
      auth: true,
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
    if (store.state.user.isLogin) {
      return false
    }
    if (to.fullPath === '/user') {
      return '/user/login'
    }
  }
  // 去的路径需要登录
  if (to.meta.auth) {
    if (!store.state.user.isLogin) {
      return false
    }
  }
})

export default router
