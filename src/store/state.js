const state = {
  token:localStorage.getItem('token') || "",
  userInfo:localStorage.getItem('userInfo'),//存储用户信息
  diseaseInfo:[],  //存储疾病信息
  swiperData:[], //存储轮播图数据
  allActivity:[], //存储所有活动
  i_id:[], //存储所有活动编号
  // allActivityDetail:[] //存储所有活动的细节
  allEssay:[] //保存所有文章
}

export default state