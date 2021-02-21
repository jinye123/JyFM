
import http from '../config/http'

// 分类数据
export function getCategoryList() {
  return http.get('http://39.105.213.120/mock/11/bear/category')
}

