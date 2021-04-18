<template>
  <div>
    <NavBar>
      <div slot="title">健康播放器</div>
    </NavBar>
    
    <Video class="video"></Video>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar/NavBar";
import Video from './childComponents/Video'

import LeftBack from '../../components/LeftBack/LeftBack'
export default {
  data() {
    return {
      
    };
  },
  components: {
    NavBar,
    Video,
    LeftBack
  },
};
</script>

<style>
.video{
  padding-top: 46px;
}
</style>
