<template>
  <Move>
    <div class="cherry" slot="Move">
      <NavBar>
        <LeftBack slot="left"></LeftBack>
      </NavBar>
      <header class="topTitle">
        <div class="doctorPass">丁香医生审核专业委员会通过</div>
        <div class="title">杨梅、樱桃用盐水泡除虫！怎样买到放心的呢？</div>
        <div class="author">
          <img src="../img/author.jpg" alt="" />
          <div class="authorIntro">
            兰晓芳
            <br />
            <span>中国农业大学 食品加共与安全硕士</span>
          </div>
        </div>
        <div class="cherryBg">
          <img src="../img/cherry.jpeg" alt="" />
        </div>
      </header>
      <section class="description">
        <div class="words">
          在杨梅快要成熟的时候，果蝇会在里面产卵，这些卵孵化后就变成了我们用盐水泡出来的小白虫。
          虽然听起来有点不舒服，但其实这并不影响杨梅的食用价值，也并不是杨梅质量不好的表现。
          果蝇跟苍蝇不同，它们从小吃果肉长大，干净无毒、不致病，也不会寄生在人体内。进入胃里后，它们无法在胃酸中存活，最终会作为蛋白质和食物一起被消化掉。
        </div>
      </section>
    </div>
  </Move>
</template>

<script>
import LeftBack from "../../../components/LeftBack/LeftBack";
import NavBar from "../../../components/NavBar/NavBar";
import Move from "../../../components/Move/Move";
export default {
  components: {
    NavBar,
    LeftBack,
    Move,
  },
};
</script>

<style lang="less">
.cherry {
  overflow: hidden;
  height: 100vh;
  // background-color: orange;
  .topTitle {
    height: 350px;
    width: 98%;
    margin: auto;
    // background-color: yellowgreen;
    .doctorPass {
      height: 23px;
      width: 183px;
      background-color: rgba(229, 229, 229, 0.9);
      border-radius: 12%;
      margin-left: 2%;
      font-size: 14px;
      color: gray;
      margin-top: 2%;
      // padding-top: 2%;
    }
    .title {
      font-size: 20px;
      margin-top: 5%;
    }
    .author {
      margin-top: 5%;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        // margin-left: 5%;
        // display: inline-block;
      }
      .authorIntro {
        float: right;
        font-size: 15px;
        color: gray;
        margin-right: 10%;
      }
    }
    .cherryBg {
      img {
        width: 100%;
        height: 100%;
        margin-top: 2%;
      }
    }
  }
  .description {
    width: 98%;
    height: 300px;
    padding-top: 10%;
    // background-color: purple;
    margin: auto;
    .words {
      text-align: left;
    }
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
