<template>
  <div>
    <van-nav-bar id="NavBar" class="clearfix">
      <slot slot="left" name="left"></slot>
      <slot slot="title" name="title"></slot>
      <slot slot="right" name="right"></slot>
    </van-nav-bar>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  methods: {
    onClickLeft() {
      Toast("返回成功");
    },
    onClickRight(path) {
      Toast("登录");
      this.$router.replace(path);
    },
  },
};
</script>

<style lang="less" scoped>
#NavBar {
  position: fixed;
  width: 100%;
  background-color: rgb(3,190,141);
}

.clearfix:before,
.clearfix:after{
  display:table;
  clear:both;
  content: "";
}
</style>
