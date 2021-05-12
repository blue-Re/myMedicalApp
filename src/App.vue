<template>
  <div id="app">
    <TabBar v-show="$route.meta.isShowTabBar" />
      <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "./components/TabBar/TabBar";
export default {
  name: "App",
  components: {
    TabBar,
  },
};
</script>

<style lang="less">
#app {
  height: 100vh;
  z-index: 1;
  // background-color: #ececec;
}
</style>
