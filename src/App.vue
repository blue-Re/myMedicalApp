<template>
  <keep-alive>
    <div id="app">
      <TabBar v-show="$route.meta.isShowTabBar" />
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </keep-alive>
</template>

<script>
import TabBar from "./components/TabBar/TabBar";
import axios from "axios";
export default {
  name: "App",
  components: {
    TabBar,
  },
  created() {
    /*  axios({
      url:'http://songidea.free.idcfengye.com/login',
      method:'POST',
      params:{
        username:'aaa',
        password:'bbb'
      }
    }).then(res=>{
      console.log(res)
    }) */
    /* axios({
      url:'http://songidea.free.idcfengye.com//login',
      // url:'http://192.168.43.139:8080/emailCaptcha',
      method:'GET',
      params:{
        email:'1120700013@qq.com'
      }
    }).then(res=>{
      console.log(res)
    }) */
    /* axios({
      // url:'http://192.168.43.139:8080/login',
      // url:'http://192.168.43.139:8080/emailCaptcha',
      // url:'http://192.168.43.139:8080/register',
      url:'http://songidea.free.idcfengye.com/emailCaptcha',
      method:'GET',
      params:{
        username:'aaa',
        password:'bbb',
        email:'1120700013@qq.com',
        inputEmailCaptcha:906150
      }
    }).then(res=>{
      console.log(res)
    }) */
  },
};
</script>

<style lang="less">
#app {
  height: 100vh;
  z-index: 1;
}
</style>
