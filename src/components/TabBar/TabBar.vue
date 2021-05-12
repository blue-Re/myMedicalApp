<template>
  <div>
    <van-tabbar route active-color="#4fc08d" fixed>
      <van-tabbar-item :replace="isReplace" to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item :replace="isReplace" to="/vedio" icon="fire-o">每日推荐</van-tabbar-item>
      <van-tabbar-item :replace="isReplace" to="/weapon" icon="eye-o">视频</van-tabbar-item>
      <van-tabbar-item :replace="isReplace" to="/mine" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      isReplace:true
    };
  },
};
</script>

<style lang="less" scoped>
  .add{
    font-size: 20px;
    color: skyblue;
  }
</style>
