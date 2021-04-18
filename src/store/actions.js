import * as types from './mutation-types'
import {reqLogin} from '../api/loginAndRegister'
export default {
  recordUser({commit},userInfo){
    commit(types.RECEIVE_USER_INFO,{userInfo})
  },
  // 设置token
  setToken(context,token){
    context.commit(types.SET_TOKEN,token)
  },
  // 清除token
  clearToken(context){
    context.commit(types.SET_TOKEN)
  }
  
}