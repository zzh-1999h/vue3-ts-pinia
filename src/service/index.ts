// service统一出口
import ZZHRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'
const zzhRequest = new ZZHRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token拦截
      const token = localCache.getCache('token')
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (config) => {
      return config
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default zzhRequest
