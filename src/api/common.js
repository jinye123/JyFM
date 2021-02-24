
import http from '../config/http'

// 分类数据
export function getCategoryList() {
  return http.get('http://39.105.213.120/mock/11/bear/category')
}

// 获取课程信息
export function getCoursesInf(id,data) {
  return http.get(`/wx/courses/${id}/step`,data)
}
