import axios from 'axios'
import { getCache } from '@/utils/cahe'
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
        const errMsg = err.response.data.msg
        if (errMsg) {
          // toast
          console.log(errMsg)
        } else {
          console.log('程序出错了呢')
        }
        return err
      },
    )
  }
}

export default new Request().isntance
