import axios from "axios";
// 请求接口函数
import Qs from 'axios'
export function ajax(config) {
  // 1.创建axios实例对象
  const instance = axios.create({
    baseURL: 'http://songidea.free.idcfengye.com',
    // timeout: 5000
  })
  // 2.axios拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    // if (config.method === "post") {
    //   if( config.data && !config.data.i ){
    //     config.headers["Content-Type"] = "multipart/form-data";
    //   }else{
    //     config.data = Qs.stringify(config.data);
    //   }
    // }
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




