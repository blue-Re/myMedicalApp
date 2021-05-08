<template>
  <Move>
    <div id="about" slot="Move">
      <NavBar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title">关于</div>
      </NavBar>

      <div class="introduce">
        <img class="logo" src="../img/logo.png" style="" alt="" />
        <div class="appName">医维度</div>
        <div class="version">Version 1.0.0</div>

        <ul class="optionsLists">
          <li class="lists">
            <div class="content">
              欢迎页<i class="iconfont icon-arrowRight-copy-copy-copy"></i>
            </div>
          </li>
          <li class="lists">
            <div class="content">
              功能介绍<i class="iconfont icon-arrowRight-copy-copy-copy"></i>
            </div>
          </li>
          <li class="lists">
            <div class="content">
              投诉<i class="iconfont icon-arrowRight-copy-copy-copy"></i>
            </div>
          </li>
          <li class="lists">
            <div class="content">
              检查新版本<i class="iconfont icon-arrowRight-copy-copy-copy"></i>
            </div>
          </li>
        </ul>

        <div class="bottom">
          <div class="words">医维度软件最终版权归开发者所有<br>
            <span>振庆荣公司 版权所有</span>
          </div>
        </div>
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
};
</script>

<style lang="less" scoped>
#about {
  background-color: #ececec;
  height: 100vh;
  overflow: hidden;
  .introduce {
    padding-top: 46px;
    position: relative;
    height: 100%;
    width: 100%;
    // background-color: orange;
    .logo {
      height: 80px;
      width: 80px;
      margin-top: 15%;
      margin-left: 40%;
      border-radius: 15px;
    }
    .appName {
      font-size: 1.33rem;
      font-weight: bold;
      text-align: center;
      margin-top: 5%;
    }
    .version {
      text-align: center;
      margin-bottom: 3%;
    }
    .optionsLists {
      // height: 100%;
      // margin-top: 3%;
      width: 96%;
      background-color: white;
      margin: 0 2%;
      border-radius: 15px;
        .lists{
          padding: 25px;
          border-bottom: 1px solid white;
          .content{
            position: relative;
            font-size: 1.1rem;
            i{
              position: absolute;
              right: 0;
            }
          }
        }
    }
    .bottom{
      position: absolute;
      bottom: 7%;
      background-color: white;
      height: 50px;
      width: 96%;
      margin: 0 2%;
      border-radius: 15px;
      text-align: center;
      .words{
        color: skyblue;
        font-size: 15px;
        span{
          color: gray;
          font-size: 10px;
        }
      }
    }
  }
}
</style>
