import axios from "axios";
export function ajax(config) {
  // 1.创建axios实例对象
  const instance = axios.create({
    baseURL: 'http://47.93.229.38:7664',
    // timeout: 5000
  })
  // 2.axios拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err)
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  // 3.发送网络请求
  return instance(config)
}

export function mockAjax(config) {
  // 1.创建axios实例对象
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
    // timeout: 5000
  })
  // 2.axios拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err)
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })
  // 3.发送网络请求
  return instance(config)
}




