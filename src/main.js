import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 重置样式表
import 'normalize.css'
import '@/assets/css/index.less'

createApp(App).use(store).use(router).mount('#app')
