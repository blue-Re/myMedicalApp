import * as types from './mutation-types'
import { getSwiperData,checkAllActivity } from '../api/home'
export default {
  recordUser({ commit }, userInfo) {
    commit(types.RECEIVE_USER_INFO, { userInfo })
  },
  // 设置token
  setToken(context, token) {
    context.commit(types.SET_TOKEN, token)
  },
  // 清除token
  clearToken(context) {
    context.commit(types.SET_TOKEN)
  },

  // 异步获取轮播图
  getSwiper({ commit }) {
    getSwiperData().then(res => {
      if (res.slideShow_url) {
        const swiperData = res.slideShow_url[0]
        commit(types.GET_SWIPER, { swiperData })
      }
    })
  },

  // 异步获取所有活动
  getAllActivity({commit,state}){
    checkAllActivity(state.token).then(res=>{
      console.log(res)
      if(res.Activity){
        const allActivity = res.Activity
        commit(types.GET_ALL_ACTIVITY,{allActivity})
      }
    })
  }
}