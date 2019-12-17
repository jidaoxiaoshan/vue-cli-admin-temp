import axios from 'axios'
import { Notification, MessageBox } from 'element-ui'
import {getToken} from '@/utils/auth'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios 实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000 // 请求超时时间
});

// request 拦截器
service.interceptors.request.use(
  config => {
    // 这里可以自定义一些config 配置
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    //  这里处理一些请求出错的情况

    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {

    const res = response.data;
    const code = res && res.status;

    // 这里处理一些response 正常放回时的逻辑
    if (code === 401) {
      MessageBox.confirm(
        '登录状态已过期，您可以继续留在该页面，或者重新登录',
        '系统提示',
        {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      })
    } else if (code !== 200) {
      Notification.error({
        title: res.msg || "请求失败"
      });
      return Promise.reject(code)
    } else {
      return res
    }
    return res
  },
  error => {
    // 这里处理一些response 出错时的逻辑

    return Promise.reject(error)
  }
)

export default service
