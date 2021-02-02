import http from '../config/http'

// 首页数据
export function getHomeList() {
  return http.post('/wx/courses/index')
}

// 首页活动数据
export function getActivityList() {
  return http.get('/wx/courses/activity')
}
