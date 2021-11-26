//axios 封装

import axios from 'axios'
import { message } from 'ant-design-vue'
import { cleanObject } from '@/utils/utils'

export const request = createAxiosInstance()

// 创建axios实例并配置
function createAxiosInstance() {
  const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://online.com/' : 'http://test',
    timeout: 10000,
    headers: {
      // 定义统一的请求头部
      post: {
        'Content-Type': 'application/json'
      },
      put: {
        'Content-Type': 'application/json'
      }
    }
  })
  requestinterceptors(instance)
  responseinterceptors(instance)
  return instance
}

// 在发送请求之前做些什么
function requestinterceptors(instance) {
  instance.interceptors.request.use((config) => {
    // loading.open()
    const token = window.localStorage.getItem('token')
    token && (config.headers.Authorization = token)
    if (config.data) {
      config.data = cleanObject(config.data)
    }
    if (config.params) {
      config.params = cleanObject(config.params)
    }
    return config
  })
}

// 处理axios响应
function responseinterceptors(instance) {
  instance.interceptors.response.use(
    (response) => {
      const res = response.data
      const validateStatus = /^(2|3)\d{2}$/ // code为2或3开头的视作请求成功
      if (validateStatus.test(res.code)) {
        return response.data
      }
      if (res.code === 401) {
        message.error(res.msg)
      } else {
        message.warning(res.msg)
      }
      return Promise.reject(res)
    },
    (error) => {
      if (error.response.status === 401) {
        message.error('token失效，请重新登录！')
        window.localStorage.removeItem('token')
        setTimeout(() => {
          window.location.href = '/login'
        }, 2000)
      } else {
        if (!window.navigator.onLine) {
          console.log('网络异常，请检查网络是否正常连接')
        } else if (error.code === 'ECONNABORTED') {
          console.log('请求超时')
        } else {
          console.log('服务器异常，请刷新重试')
        }
      }

      return Promise.reject(error) // 将错误继续返回给到具体页面
    }
  )
}
