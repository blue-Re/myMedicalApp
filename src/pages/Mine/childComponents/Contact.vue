<template>
  <Move>
    <div id="contact" slot="Move">
      <NavBar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title">联系客服</div>
      </NavBar>

      <div class="workers">
        <div class="title">请联系工作人员!!!</div>
          <img src="../img/gz.jpg" alt="">
          <img src="../img/sqy.jpg" alt="">
          <img src="../img/spr.jpg" alt="">
      </div>
    </div>
  </Move>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import LeftBack from "../../../components/LeftBack/LeftBack";
import Move from "../../../components/Move/Move";
export default {
components: {
    NavBar,
    LeftBack,
    Move,
  },
}
</script>

<style lang="less" scoped>
  #contact{
    height: 100%;
    overflow: hidden;
    background-color: #ececec;
    .workers{
      padding-top: 46px;
      .title{
        font-weight: bold;
        color: red;
        text-align: center;
      }
      img{
        width: 200px;
        height: 200px;
        border-radius: 15px;
        margin: 5% 20%;
      }
    }
  }
</style>