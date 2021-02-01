import http from '../config/http'

// 首页数据
export function getHomeList() {
  return http.post('/wx/courses/index')
}
