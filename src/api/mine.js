import {ajax} from '../api/ajax'
// 问卷调查接口
export function questionsSurvey(token,values) {  
  return ajax({
    url:'/Survey',
    method:'POST',
    headers:{token,'content-type':'application/json'},
    data:values
  })
}

/**
 * 我参加的活动
 * @param {token}
 * @returns 
 */
export function myJoinActivity(token) {  
  return ajax({
    url:'/myJoinActivity',
    method:'GET',
    headers:{token}
  })
}

/**
 * 我发布的活动
* @description
*/
export function myPublishActivity(token) {  
  return ajax({
    url:'/myPublishActivity',
    method:'GET',
    headers:{token}
  })
}