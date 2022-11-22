// 基本配置的文件
let BASE_URL = ''
const TIME_OUT = 3000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://zzh.org/prod'
} else {
  BASE_URL = 'http://zzh.org/test'
}
export { BASE_URL, TIME_OUT }
