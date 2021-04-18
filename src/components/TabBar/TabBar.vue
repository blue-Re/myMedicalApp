<template>
  <div>
    <van-tabbar route active-color="#4fc08d">
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/vedio" icon="fire-o">每日推荐</van-tabbar-item>
      <van-tabbar-item replace to="/weapon" icon="eye-o">视频</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style>

</style>
