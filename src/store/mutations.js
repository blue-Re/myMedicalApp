import * as types from './mutation-types'
export default {
  // 登录
  [types.RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  },

  // 操作token
  [types.SET_TOKEN](state,token){
    state.token = token
  },
  
  //轮播图数据
  [types.GET_SWIPER](state,{swiperData}){
    state.swiperData = swiperData
  },

  // 操作所有活动数据
  [types.GET_ALL_ACTIVITY](state,{allActivity,i_id}){
    state.allActivity = allActivity
    state.i_id = i_id
  },

  // 操作所有文章
  [types.ALL_ESSAY](state,{allEssay}){
    state.allEssay = allEssay
  }

}