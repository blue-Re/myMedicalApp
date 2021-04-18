<template>
  <keep-alive>
    <div class="Swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-if="this.swiperImg">
        <van-swipe-item>
          <img :src="this.swiperImg[0][0].slideshow_url" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="this.swiperImg[0][1].slideshow_url" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="this.swiperImg[0][2].slideshow_url" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="this.swiperImg[0][3].slideshow_url" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="this.swiperImg[0][4].slideshow_url" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </keep-alive>
</template>

<script>
import { getSwiperData } from "../../../api/home";
export default {
  data() {
    return {
      swiperImg: [],
    };
  },
  created() {
    getSwiperData().then((res) => {
      this.swiperImg = res.slideShow_url;
    });
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
    height: 152px;
    // border-radius: 15%;
  }
}
</style>
