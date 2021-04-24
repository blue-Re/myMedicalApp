const state = {
  userInfo:{},//存储用户信息
  token:localStorage.getItem('token') || "",
  diseaseInfo:[],  //存储疾病信息
  swiperData:[], //存储轮播图数据
  allActivity:[] //存储所有活动
}

export default state