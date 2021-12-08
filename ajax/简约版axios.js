import axios from 'axios'

export const request = createAxiosInstance()

// 创建axios实例并配置
function createAxiosInstance() {
  const instance = axios.create({
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'http://127.0.0.1:10012/'
        : 'https://ysdl-3d.com/',
    timeout: 10000,
    headers: {
      // 定义统一的请求头部
      post: {
        'Content-Type': 'application/json',
      },
      put: {
        'Content-Type': 'application/json',
      },
    },
  })
  responseinterceptors(instance)
  return instance
}

// 处理axios响应
function responseinterceptors(instance) {
  instance.interceptors.response.use(
    (response) => {
      const validateStatus = /^(2|3)\d{2}$/ // code为2或3开头的视作请求成功
      if (validateStatus.test(response.status)) {
        return response.data
      }
      return Promise.reject(response)
    },
    (error) => {
      if (!window.navigator.onLine) {
        console.log('网络异常，请检查网络是否正常连接')
      } else if (error.code === 'ECONNABORTED') {
        console.log('请求超时')
      } else {
        console.log('服务器异常，请刷新重试')
      }
      return Promise.reject(error) // 将错误继续返回给到具体页面
    }
  )
}
