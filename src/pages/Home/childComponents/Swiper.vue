<template>
    <div class="Swiper">
      <van-loading size="24px" color="skyblue" class="loading" v-show="swiperData.length==0">加载中...</van-loading>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in swiperData" :key="index">
          <img :src="item.slideshow_url" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      swiperImg: [],
    };
  },
  computed:{
    ...mapState(['swiperData'])
  },
};
</script>

<style soped lang="less">
.Swiper {
  padding-top: 46px;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  // line-height: 150px;
  text-align: center;
  // background-color: #39a9ed;
  // box-shadow: 10px 10px 5px #888888;
  img {
    width: 100%;
    height: 200px;
    // border-radius: 15%;
  }
}
</style>
