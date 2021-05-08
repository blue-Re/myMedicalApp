import * as types from './mutation-types'
import { getSwiperData,checkAllActivity,getAllEssay } from '../api/home'
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
      console.log(res)
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
        const i_id = []
        for (let i = 0; i < allActivity.length; i++) {
          i_id.push(allActivity[i].id)
        }
        commit(types.GET_ALL_ACTIVITY,{allActivity,i_id})
      }
    })
  },

  // 异步获取所有文章
  _getAllEssay({commit,state}){
    getAllEssay(state.token).then(res=>{
      const allEssay = res.allEssay
      commit(types.ALL_ESSAY,{allEssay})
      // console.log(allEssay)
    })
  }
}