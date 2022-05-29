import { createApp } from 'vue'
import mavonEditor from 'mavon-editor'
import { Modal, Input, Avatar, Comment, List, Tooltip } from 'ant-design-vue'
import '@/config'
import App from './App.vue'
import router from './router'
import store from './store'

// 重置样式表
import 'normalize.css'
import '@/assets/css/index.less'

createApp(App)
  .use(store)
  .use(router)
  .use(mavonEditor)
  .use(Modal)
  .use(Input)
  .use(Avatar)
  .use(Comment)
  .use(List)
  .use(Tooltip)
  .mount('#app')
