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