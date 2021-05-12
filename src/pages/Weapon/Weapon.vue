<template>
  <Move>
    <div id="Weapon" slot="Move">
      <NavBar>
        <div slot="title" class="topTitle">健康小知识</div>
      </NavBar>
      <div class="block"></div>
      <van-loading size="24px" v-show="resource.length===0">加载中...</van-loading>
      <TestVideo
        v-if="resource.length !== 0"
        :videoData="resource"
        v-for="(item, index) in resource"
        :key="index"
        :index="index"
      ></TestVideo>
      <div class="bottomBox"></div>
    </div>
  </Move>
</template>

<script>
import NavBar from "../../components/NavBar/NavBar";
import LeftBack from "../../components/LeftBack/LeftBack";
import Move from "../../components/Move/Move";

import TestVideo from "./childComponents/TestVideo";

import { getAllVideo } from "../../api/video";
import { mapState } from "vuex";

export default {
  data() {
    return {
      resource: [],
    };
  },
  components: {
    NavBar,
    LeftBack,
    TestVideo,
    Move,
  },
  computed: {
    ...mapState(["token"]),
  },
  created() {
    this._getAllVideo();
  },
  methods: {
    // 获取所有视频
    _getAllVideo() {
      getAllVideo(this.token).then((res) => {
        this.resource = res.resource;
      });
    },
  },
};
</script>

<style lang="less" scoped>
#Weapon {
  height: calc(100vh + 130px);
  // height: 100vh;
  overflow: scroll;
  // height: 100%;
  background-color: #ececec;
  .block {
    height: 46px;
  }
  .topTitle{
    color: white;
  }
  .bottomBox{
    height: 50px;
  }
}
</style>
