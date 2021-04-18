<template>
  <div id="healthAlert">
    <NavBar>
      <LeftBack slot="left"></LeftBack>
      <div slot="title">健康提醒</div>
    </NavBar>

    <van-calendar
      title="健康日历"
      :poppable="false"
      :show-confirm="true"
      :style="{ height: '300px' }"
      class="calendar"
      color="red"
    />

    <div class="select">
      <div
        class="item"
        v-for="(item, index) in exercise"
        :class="{ active: index === currentIndex }"
        :key="index"
        @click="isActive(item,index)"
      >
        {{ item }}
      </div>
    </div>

    <img src="../img/healthAlert.jpeg" alt="" class="img">
  </div>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import LeftBack from "../../../components/LeftBack/LeftBack";
export default {
  data() {
    return {
      exercise: ["设置运动提醒", "用药提醒"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
    LeftBack,
  },
  methods: {
    isActive(item, index) {
      console.log(item, index);
      this.currentIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
#healthAlert {
  height: 100vh;
  // overflow: hidden;
  .calendar {
    padding-top: 46px;
    // background-color: rgb(113, 219, 192);
  }
  .select {
    display: flex;
    border: 1px solid greenyellow;
    width: 80%;
    margin: 0 auto;
    .item {
      text-align: center;
      flex: 1;
    }
  }
  .img{
    margin: 0 10%;
    margin-top: 4%;
    height: 30%;
    width: 80%;
  }
  .active {
    background-color: greenyellow;
  }
}
</style>
