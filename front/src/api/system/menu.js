import request from '@/utils/request'

export default {
  // 目录列表
  list (params) {
    return request({
      url: '/menu/list',
      method: 'get',
      params
    })
  },
}
