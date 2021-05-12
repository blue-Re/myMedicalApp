<template>
  <Move>
    <div id="essay" slot="Move">
    <NavBar>
      <LeftBack slot="left" @click.native="back"></LeftBack>
      <div class="title" slot="title">疾病详情</div>
    </NavBar>
      <div class="content" v-if="allEssay.length!==0" v-html="allEssay[id].content">{{ allEssay[id].content }}</div>
    </div>
  </Move>
</template>

<script>
import { mapState } from "vuex";
import LeftBack from "../../../components/LeftBack/LeftBack";
import Move from "../../../components/Move/Move";
import NavBar from "../../../components/NavBar/NavBar";
export default {
  data() {
    return {
    };
  },
  components: {
    LeftBack,
    Move,
    NavBar,
  },
  
  computed: {
    ...mapState(["allEssay"]),
    id(){
      return this.$route.params.id
    }
  },
  methods: {
    back(){
      this.$router.replace('/home')
    }
  },
};
</script>

<style lang="less">
#essay {
  width: 100%;
  height: 100vh;
  // background-color: yellow;
  overflow: scroll;
  img {
    width: 100%;
    height: 100%;
  }
  .content{
    padding-top: 46px;
  }
  div{
    text-indent: 0;
  }
}
</style>
