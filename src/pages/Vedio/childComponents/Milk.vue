<template>
  <div id="milk">
    <NavBar>
      <LeftBack slot="left"></LeftBack>
      <div class="title" slot="title">酸奶预防糖尿病</div>
    </NavBar>

    <header class="topTitle">
      <div class="doctorPass">丁香医生审核专业委员会通过</div>
      <div class="title">每天一杯酸奶，能预防糖尿病？还真有几分道理</div>
      <div class="author">
        <div class="authorIntro">
          范志红
          <br />
          <span>食品科学与营养工程学院副教授</span>
        </div>
      </div>
      <div class="cherryBg">
        <img src="../img/milk.png" alt="" />
      </div>
    </header>

    <section class="description">
      <div class="words">
        得了糖尿病，最痛苦的事莫过于--要跟美食说拜拜。
        比如牛奶、酸奶，很多人都以为从此不能喝。
        但事实真的是这样吗?今天请营养专家范志红老师给大家讲讲。
        答案是肯定的，糖尿病患者可以喝牛奶。
        牛奶含有4.6%左右的乳糖，不过乳糖本身消化速度就很慢,其中所含的乳蛋白也有利于延缓
        餐后的消化速度。 所以，牛奶不仅本身的餐后血糖反应很低，如果把牛奶和主食一起食用，
        还能降低混合食物的 血糖反应。
        也就是说，如果你原来吃热水泡燕麦片，现在用热牛奶泡燕麦片，餐后血糖上升的幅度会比此
        前降低。
        只要一天之中的总热量摄入不超过医生的要求，喝牛奶其实对维持血糖稳定有好处。<br /><br />
        糖尿病患者能不能喝酸奶? 糖尿病人也能喝酸奶。
        虽然酸奶中加入了糖，但还是比等量米饭、馒头的血糖上升速度慢得多,这是由于酸奶中的乳酸能延缓胃排空,有助于控制餐后血糖。
        所以，糖尿病患者选择食物时，食物的升血糖速度才是我们更应该考虑的,味道甜不甜并不是关键。
        这么看来，酸奶当然可以喝。不过如果能自制酸奶，少加点糖，或者干脆加点不含糖的甜味
        剂，血糖反应会更低，对糖尿病患者会更好。
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import LeftBack from "../../../components/LeftBack/LeftBack";
export default {
  components: {
    NavBar,
    LeftBack,
  },
};
</script>

<style lang="less" scoped>
#milk {
  height: 100vh;
  overflow: scroll;
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
        float: left;
        font-size: 15px;
        color: gray;
        // margin-right: 10%;
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
</style>
