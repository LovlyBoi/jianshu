import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'
import FollowView from '@/views/FollowView.vue'
import MemberView from '@/views/MemberView.vue'
import ITView from '@/views/ITView.vue'
import MessageView from '@/views/MessageView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import CallUsView from '@/views/CallUsView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import DescriptionView from '@/views/DescriptionView.vue'
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
    component: FollowView,
    meta: {
      keepAlive: false,
      auth: false,
    },
  },
  {
    path: '/member',
    name: 'member',
    component: MemberView,
    meta: {
      keepAlive: false,
      auth: false,
    },
  },
  {
    path: '/aboutUs',
    name: 'aboutUs',
    component: AboutUsView,
    meta: {
      keepAlive: false,
      auth: false,
    },
  },
  {
    path: '/callUs',
    name: 'callUs',
    component: CallUsView,
    meta: {
      keepAlive: false,
      auth: false,
    },
  },
  {
    path: '/description',
    name: 'description',
    component: DescriptionView,
    meta: {
      keepAlive: false,
      auth: false,
    },
  },
  {
    path: '/it',
    name: 'it',
    component: ITView,
    meta: {
      keepAlive: false,
      auth: false,
    },
  },
  {
    path: '/message',
    name: 'message',
    component: MessageView,
    meta: {
      keepAlive: false,
      auth: false,
    },
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () =>
      import(
        /* webpackChunkName: 'ArticleView' */
        /* webpackPrefetch: true */
        '@/views/ArticleView.vue'
      ),
    meta: {
      keepAlive: false,
      auth: false,
    },
  },
  {
    path: '/user',
    name: 'user',
    component: () =>
      import(
        /* webpackChunkName: 'UserView' */
        /* webpackPrefetch: true */
        '@/views/UserView.vue'
      ),
    children: [
      {
        path: 'login',
        component: () =>
          import(
            /* webpackChunkName: 'LoginView' */
            /* webpackPrefetch: true */
            '@/views/LoginView.vue'
          ),
        meta: {
          keepAlive: true,
          auth: false,
        },
      },
      {
        path: 'register',
        component: () =>
          import(
            /* webpackChunkName: 'RegisterView' */
            /* webpackPrefetch: true */
            '@/views/RegisterView.vue'
          ),
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
    component: () =>
      import(
        /* webpackChunkName: 'WriterView' */
        '@/views/WriterView.vue'
      ),
    meta: {
      keepAlive: true,
      auth: false,
    },
  },
  {
    path: '/setting',
    name: 'setting',
    component: () =>
      import(
        /* webpackChunkName: 'SettingView' */
        '@/views/SettingView.vue'
      ),
    meta: {
      keepAlive: false,
      auth: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: NotFoundView,
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
