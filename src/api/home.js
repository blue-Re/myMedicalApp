import { ajax } from '../api/ajax'

// 发布活动，将图片上传给后台
export function reqPublishActivity(theme, content, peoplenum, address, data, pic_url, token) {
  return ajax({
    url: '/addActivity',
    method: 'POST',
    headers: { token, "content-type": 'application/json' },
    data: {
      theme,
      content,
      peoplenum,
      address,
      data,
      pic_url,
    },
    processData: false,
    contentType: false,
  })
}

/* 
  请求疫苗信息
*/
export function reqChildVaccine(date) {
  return ajax({
    url: `/babyBacterin/` + date,
    method: 'GET',
  })
}

/* 
  疾病查询
*/
export function diseaseSearch(disease) {
  return ajax({
    url: '/diseaseSearch',
    method: 'GET',
    params: {
      disease
    }
  })
}

// 评论接口
export function comment(a_id, content, token) {
  return ajax({
    url: '/commentActivity',
    method: 'POST',
    responseType: 'json',
    headers: { token },
    params: {
      a_id,
      content,
    }
  })
}

// 获取轮播图接口
export function getSwiperData() {
  return ajax({
    url: '/slideShow',
    method: "GET"
  })
}

/* 
  查看所有活动
*/
export function checkAllActivity(token) {  
  return ajax({
    url:'/avtivityAll',
    method:'GET',
    headers:{token}
  })
}