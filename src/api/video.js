import {ajax} from '../api/ajax'

/**
 * 获取所有视频
* @description
*/
export function getAllVideo(token) {  
  return ajax({
    url:'/getAllVideo',
    method:'GET',
    headers:{token}
  })
}