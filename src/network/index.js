import axios from 'axios'
import { message } from 'ant-design-vue'
import { getCache } from '@/utils/cahe'
import router from '@/router'
import store from '@/store'
import { TIMEOUT, BASEURL } from './config'

class Request {
  constructor() {
    this.isntance = axios.create({
      baseURL: BASEURL,
      timeout: TIMEOUT,
    })
    this.isntance.interceptors.request.use((config) => {
      const token = getCache('token') || ''
      config.headers ??= {}
      config.headers.Authorization = token
      return config
    })
    this.isntance.interceptors.response.use(
      (response) => response.data,
      (err) => {
        // token 失效，退出登录，跳转到登录页面
        if (err.response.status === 401) {
          message.error('登录过期')
          store.commit('changeLoginState', {
            state: false,
          })
          router.push('/user/login')
          return err
        }
        const errMsg = err.response.data.msg
        if (errMsg) {
          console.log(errMsg)
          message.error(errMsg)
        } else {
          message.error('程序出错了呢')
        }
        return err
      },
    )
  }
}

export default new Request().isntance
