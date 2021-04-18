<template>
  <transition name="move">
    <div class="manHealth">
      <NavBar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title">男性健康</div>
      </NavBar>
      <div class="bg">
        <img src="../img/man.jpg" alt="" />
      </div>
    </div>
  </transition>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import LeftBack from '../../../components/LeftBack/LeftBack'
import { Toast } from "vant";
export default {
  components: {
    NavBar,
    LeftBack
  },
  methods: {
    back() {
      this.$router.go(-1);
      Toast("返回成功！");
    },
  },
};
</script>

<style lang="less" scoped>
.manHealth {
  height: 100%;
  width: 100%;
  // background-color: yellowgreen;
  z-index: 3;
  overflow: scroll;
  // background-image: url('../img/man.jpg');
  // background-attachment: scroll;
  img {
    padding-top: 46px;
    width: 100%;
    height: 100%;
  }
}
.move-enter-active,
.move-leave-active {
  transition: all 0.3s;
}
.move-enter,
.move-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>
