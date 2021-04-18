import * as types from './mutation-types'
export default {
  // 登录
  [types.RECEIVE_USER_INFO](state,{userInfo}){
    state.userInfo = userInfo
  },

  // 操作token
  [types.SET_TOKEN](state,token){
    state.token = token
  }
  
}