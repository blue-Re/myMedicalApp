import axios from 'axios'
import { ajax } from '../api/ajax'

// 发布活动
export function reqPublishActivity(theme,content,peoplenum,address,data,file,token) {
  return ajax({
    url: '/addActivity',
    method: 'POST',
    headers: {token},
    params: {
      theme,
      content,
      peoplenum, 
      address, 
      data, 
      file
    }
  })
}

/* 
  请求疫苗信息
*/
export function reqChildVaccine(date) {  
  return ajax({
    url:`/babyBacterin/`+date,
    method:'GET',
  })
}





// 评论接口
export function comment(a_id,content,token) {  
  return ajax({
    url:'/commentActivity',
    method:'POST',
    responseType:'json',
    headers:{token},
    params:{
      a_id,
      content,
    }
  })
}

// 获取轮播图接口
export function getSwiperData() {  
  return ajax({
    url:'/slideShow',
    method:"GET"
  })
}
