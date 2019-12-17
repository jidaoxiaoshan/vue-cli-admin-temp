import request from '@/utils/request'

export default {
  // 登录
  login (data) {
    return request({
      url: '/login',
      method: 'post',
      data
    })
  },
  // 登出
  logout () {
    return request({
      url: '/loginOut',
      method: 'post',
    })
  },
  // 获取用户信息
  getUserInfo () {
    return request({
      url: '/userinfo',
      method: 'get'
    })
  }
}
