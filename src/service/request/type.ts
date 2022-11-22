import type { AxiosRequestConfig, AxiosResponse } from 'axios'
export interface ZZHRequestInterceptores<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}
export interface ZZHRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: ZZHRequestInterceptores<T>
  showLoading?: boolean
}
