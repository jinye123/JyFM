import axios from 'axios'
import Config from "react-native-config";

const service = axios.create({
  baseURL: Config.API_URL, // url = base url + request url
  timeout: 50000,
  // withCredentials: true, // 跨域发送cookie
  // responseType: 'json'
})
// 请求拦截
service.interceptors.request.use(config => {
    config.headers['token'] = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzc3p4LXNlcnZlciIsImF1ZCI6IjI5NDIiLCJ1bmlvbmlkIjoib3hScS13VGU2bGk1NFRYVk56YUhYbE5YR2Z3dyIsInJvbGUiOiIyNCIsIm9wZW5pZCI6Im84dURPNW01bjFzX19YZHNJcmRINXcxcmdJUkkiLCJpc3MiOiJzc2RqeiIsImV4cCI6MTYxMzgwNDQ5NiwiaWF0IjoxNjEzNzkzNjk2fQ.I2U6ojkg6mSNR91ZGIFcCMZZcz7zEYDbI2UeU4yiU-s"
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(response => {

    if (response.status >= 200 && response.status < 300) {
      const {code, data, message,netCode} = response.data
      if (code === 1||netCode==='00000'||netCode==='T1003') {
        return data
      } else if(code === -1){
        // Toast('您的登录已过期,请重新登录')
      }else {
        // Toast(message || 'Error')
        return Promise.reject(message || 'Error')
      }
    }
  },
  error => {
    // Toast(error.message)
    return Promise.reject(error)
  }
)
// 请求方式
export default {
  post(url, data,hideLoading=false) {
    return new Promise((resolve, reject) => {
      service({
        method: 'post',
        url,
        data: data,
        hideLoading:hideLoading
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  patch(url, data,hideLoading=false) {
    return new Promise((resolve, reject) => {
      service({
        method: 'patch',
        url,
        data: data,
        hideLoading:hideLoading
      }).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  get(url, params,hideLoading=false) {
    return new Promise((resolve, reject) => {
      service({
        method: 'get',
        url,
        params,
        hideLoading:hideLoading
      }).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      service({
        method: 'delete',
        url,
        params
      }).then((res) => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
