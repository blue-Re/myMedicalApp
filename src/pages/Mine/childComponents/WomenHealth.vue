<template>
  <Move>
    <div class="womenHealth" slot="Move">
      <NavBar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title">关爱女性</div>
      </NavBar>
      <div class="bg">
        <img src="../img/women.jpg" alt="" />
      </div>
    </div>
  </Move>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import LeftBack from "../../../components/LeftBack/LeftBack";
import Move from "../../../components/Move/Move";
import { Toast } from "vant";
export default {
  components: {
    NavBar,
    LeftBack,
    Move,
  },
};
</script>

<style lang="less">
.womenHealth {
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

</style>
