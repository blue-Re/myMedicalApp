<template>
  <Move>
    <div class="emergency" slot="Move">
      <NavBar>
        <LeftBack slot="left" @click.native="back"></LeftBack>
        <div slot="title">急救指南</div>
      </NavBar>
      <header class="topTitle" v-if="emergencyData.length!==0">
        <div class="title">{{ emergencyData[id].name }}</div>
        
        <div class="cherryBg">
          <img :src="emergencyData[id].img" alt="" />
        </div>
      </header>
      <section class="description" v-if="emergencyData.length!==0">
        <div class="words">
          {{emergencyData[id].content}}
        </div>
      </section>
      <!-- 评论 -->
      
    </div>
  </Move>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import LeftBack from "../../../components/LeftBack/LeftBack";
import Move from "../../../components/Move/Move";
import { reqEmergency } from "../../../mockjs/reqMock"; //引入模拟数据
export default {
  components: {
    NavBar,
    LeftBack,
    Move,
  },
  mounted(){
    this.getId()
  },

  data() {
    return {
      emergencyData: [],
      id: "",
    };
  },
  methods: {
    // 获取当前路由的id,然后去请求对应的数据
    getId() {
      this.id = this.$route.params.id;
      console.log(this.id);
      // 拿数据
      reqEmergency().then((res) => {
        this.emergencyData = res.data;
        console.log(this.emergencyData);
      });
    },
    back() {
      this.$router.replace('/vedio');
      location.reload()
    },
  },
};
</script>

<style lang="less" scoped>
.topTitle {
  padding-top: 46px;
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
      height: 200px;
      margin-top: 2%;
    }
  }
}
.description {
  width: 98%;
  height: 300px;
  // padding-top: 10%;
  // background-color: purple;
  margin: auto;
  .words {
    text-align: left;
    text-indent: 2em;
  }
}
</style>
