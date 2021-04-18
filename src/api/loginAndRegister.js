import {ajax} from '../api/ajax'

// 请求登录
export function reqLogin(username,password) {  
  return ajax({
    url:'/login',
    method:'POST',
    params:{
      username,
      password
    }
  })
}

// 发送验证码接口
export function reqSendEmailCaptcha(username,password,email) {  
  return ajax({
    url:'/emailCaptcha',
    method:'GET',
    params:{
      username,
      password,
      email
    }
  })
}

// 注册接口
export function reqRegister(username,password,email,inputEmailCaptcha) {  
  return ajax({
    url:'/register',
    method:"POST",
    params:{
      username,
      password,
      email,
      inputEmailCaptcha
    }
  })
}