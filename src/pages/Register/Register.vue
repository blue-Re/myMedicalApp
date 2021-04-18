<template>
  <Move>
    <div id="Register" slot="Move">
      <div class="content">
        <div class="HeaderWord">欢迎注册</div>
        <div class="info">
          <van-field
            v-model="username"
            type="tel"
            label="用户名"
            class="infoSize username"
          />
          <van-field v-model="password" type="password" label="密码" class="infoSize" />
          <van-field v-model="email" type="text" label="邮箱" class="infoSize" />
          <van-field
            v-model="number"
            type="number"
            label="验证码"
            class="infoSize emailCaptcha"
          />
          <van-button
            type="primary"
            size="mini"
            class="sendemailCaptcha"
            @click="register()"
            >获取验证码</van-button
          >
        </div>
        <van-button
          @click="goToLogin()"
          class="registerButton"
          size="large"
          hairline
          round
          color="linear-gradient(to right, skyblue, greenyellow)"
          >注册</van-button
        >
      </div>
    </div>
  </Move>
</template>

<script>
import Move from "../../components/Move/Move";

import { reqSendEmailCaptcha } from "../../api/loginAndRegister";
import { reqRegister } from "../../api/loginAndRegister";
import { Toast } from 'vant';
export default {
  data() {
    return {
      number: "",
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    register() {
      Toast('正在获取验证码请稍等...')
      reqSendEmailCaptcha(this.username, this.password, this.email).then((res) => {
        console.log(res);
        if(res.msg === '发送成功'){
          Toast('验证码已发送到您的邮箱')
        }
      });
    },
    goToLogin(){
      reqRegister(this.username, this.password, this.email,this.number).then(res=>{
        console.log(res)
        if(res.msg === '注册成功'){
          this.$router.replace("/login")
          Toast('注册成功，请登录！')
        }else if(res.msg !== '注册成功'){
          Toast(res.msg)
        }
      })
    }
  },
  components: {
    Move,
  },
};
</script>

<style lang="less" scoped>
#Register {
  height: 100vh;
  overflow: hidden;
  background: url("./img/newbg2.webp");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  .content {
    margin-top: 50%;
    .HeaderWord {
      text-align: center;
      font-size: 25px;
      margin: 4%;
      color: deepskyblue;
    }
    .info {
      text-align: center;
      width: 94%;
      margin: 0 auto;
      position: relative;
      .username {
        border-radius: 2% 2% 0 0;
        // border-bottom: 1px solid grey;
      }
      .emailCaptcha {
        border-radius: 0 0 2% 2%;
        // border-bottom: 1px solid grey;
      }
      .sendemailCaptcha {
        position: absolute;
        right: 0;
        bottom: 6%;
      }
    }
    .registerButton {
      width: 90%;
      text-align: center;
      margin-left: 5%;
      margin-top: 2%;
    }
  }
}
</style>
