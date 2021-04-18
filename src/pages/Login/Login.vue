<template>
  <Move>
    <div id="Login" slot="Move">
      <div class="content">
        <div class="HeaderWord">欢迎登录</div>
        <van-form class="form">
          <van-field
            class="username"
            v-model="loginForm.username"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '' }]"
            input-align="left"
            label-width="6.0em"
          />
          <van-field
            class="password"
            v-model="loginForm.password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '' }]"
          />
          <van-loading color="#1989fa" v-show="loading" class="loading" />
          <div>
            <div class="buttons">
              <van-button
                class="btn"
                size="large"
                hairline
                round
                color="linear-gradient(to right, skyblue, greenyellow)"
                @click="login()"
                >登录</van-button
              >
              <van-button
                class="btn"
                size="large"
                hairline
                round
                color="linear-gradient(to right, skyblue, greenyellow)"
                to="/register"
                >注册</van-button
              >
            </div>
          </div>
        </van-form>
      </div>
    </div>
  </Move>
</template>

<script>
import Move from "../../components/Move/Move";
import { Toast } from "vant";
import { reqLogin } from "../../api/loginAndRegister";

import { mapMutations } from "vuex";

export default {
  components: {
    Move,
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
      loading: false,
    };
  },
  methods: {
    ...mapMutations(["CHANGE_LOGIN"]),
    login() {
      let user;
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        Toast("请输入用户名或密码");
      } else {
        reqLogin(this.loginForm.username, this.loginForm.password).then((res) => {
          console.log(res);
          this.loading = true;
          if (res.code === "200") {
            user = this.loginForm.username;
            this.$store.dispatch("recordUser", user);
            // 保存token
            localStorage.setItem("token", res.token);
            this.$store.dispatch("setToken", res.token);

            this.$router.replace("/home");
            this.loading = false;
            Toast(res.msg);
          } else {
            Toast(res.msg);
            this.loading = false;
          }
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
#Login {
  height: 100vh;
  overflow: hidden;
  background-image: url("./img/newbg2.webp");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  .content {
    margin-top: 50%;
    opacity: 0.8;
  }
  .HeaderWord {
    text-align: center;
    font-size: 25px;
    margin: 4%;
    color: deepskyblue;
  }
  .form {
    position: relative;
    text-align: center;
    margin: 0 auto;
    width: 94%;
    .loading {
      z-index: 3;
      position: fixed;
      right: 50%;
    }
    .username {
      border-radius: 2% 2% 0 0;
      // border-bottom: 1px solid gray;
    }
    .password {
      border-radius: 0 0 2% 2%;
      // border-bottom: 1px solid gray;
    }
  }
}
.buttons {
  text-align: center;
  margin-top: 2%;
  .btn {
    margin: 1% 0;
  }
}
</style>
