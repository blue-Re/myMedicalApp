<template>
  <Move>
    <div id="illness" slot="Move">
      <NavBar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title">智能疾病查询</div>
      </NavBar>
      <div class="blank"></div>
      <div class="search">
        <input type="text" placeholder="请输入常见疾病" />
        <i class="iconfont icon-sousuo_huaban1" @click="getIllnessData"></i>
      </div>
      <div class="img">
        <img src="../img/illnessCheck.jpg" alt="" />
      </div>
      <ul class="params">
        <li class="items">
          <div class="description">
            <span class="leftWords words">GoodsName</span>
          </div>
          <div class="description">
            <span class="rightWords words">1111111111</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">manuAddress</span>
          </div>
          <div class="description">
            <span class="rightWords words">22222</span>
          </div>
        </li>
        <!-- <li class="items">
          <div class="description">
            <span class="leftWords words">manuName</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{this.imageData.manuName}}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">barCode</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{this.imageData.code}}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">trademark</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{this.imageData.trademark}}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">goodsType</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{this.imageData.goodsType}}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">spec</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{this.imageData.spec}}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">trademark</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{this.imageData.trademark}}</span>
          </div>
        </li> -->
      </ul>
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
  methods:{
    getIllnessData(){
      console.log("我要拿数据")
    }
  }
};
</script>

<style lang="less" scoped>
#illness {
  height: 100vh;
  width: 100%;
  .blank {
    padding-top: 70px;
  }
  .search {
    position: relative;
    text-align: center;
    input {
      height: 40px;
      border: 1px solid rgb(3, 190, 141);
      width: 90%;
    }
    .iconfont {
      position: absolute;
      font-size: 1.5rem;
      right: 8%;
      top: 18%;
      color: green;
    }
  }
  .img {
    padding-top: 5%;
    width: 100%;
    text-align: center;
    img {
      height: 100%;
      width: 98%;
    }
  }
  .params {
    height: 180px;
    width: 100%;
    background-color: purple;
    display: flex;
    flex-direction: column;
    .items {
      // background-color: orange;
      flex: 1;
      border-bottom: 1px solid rgb(195, 195, 195);
      display: flex;
      .description {
        flex: 1;
        // background-color: pink;
        display: flex;
        align-items: center;
        // height: 60px;
        .words {
          margin: auto;
        }
        .rightWords {
          color: rgb(166, 166, 166);
        }
      }
    }
  }
}
</style>
