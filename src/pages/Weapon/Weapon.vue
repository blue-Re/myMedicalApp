<template>
  <div id="Weapon">
    <NavBar>
      <div slot="title">健康小知识</div>
    </NavBar>
    <div class="block"></div>
    <Video class="video"></Video>
    <Video2 class="video"></Video2>
    <Video3 class="video"></Video3>

  </div>
</template>

<script>
import NavBar from "../../components/NavBar/NavBar";
import Video from './childComponents/Video'
import Video2 from './childComponents/Video2'
import Video3 from './childComponents/Video3'

import LeftBack from '../../components/LeftBack/LeftBack'
export default {
  data() {
    return {
      mp4:[
        {
          src:'',
          poster:''
        },
        {
          src:'',
          poster:''
        },
        {
          src:'',
          poster:''
        }
      ]
    };
  },
  components: {
    NavBar,
    Video,
    LeftBack,
    Video2,
    Video3
  },
};
</script>

<style lang="less" scoped>
.block{
  padding-top: 46px;
}
#Weapon{
  // height: calc(100vh + 46px + 50px);
  height: 100vh;
  overflow: scroll;
  // height: 100%;
  .video{
    margin: 10% 0;
  }
}
</style>
