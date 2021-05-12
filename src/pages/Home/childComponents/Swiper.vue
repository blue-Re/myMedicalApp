<template>
  <div class="Swiper">
    <!-- <van-loading
      size="24px"
      color="skyblue"
      class="loading"
      v-show="swiperData"
      >加载中...</van-loading
    > -->
    <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-if="swiperData">
      <van-swipe-item v-for="(item, index) in swiperData" :key="index">
        <img :src="item.slideshow_url" alt="" />
      </van-swipe-item>
    </van-swipe> -->

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src='https://songidea.oss-cn-beijing.aliyuncs.com/medical/slideshow/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20210427214538.jpg'
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src='https://songidea.oss-cn-beijing.aliyuncs.com/medical/slideshow/5d1f928ce1efab2e67fc052b0dacaac8.jpeg'
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src='https://songidea.oss-cn-beijing.aliyuncs.com/medical/slideshow/a8e45ad5f96235da17c28eb74197dff.jpg'
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src='https://songidea.oss-cn-beijing.aliyuncs.com/medical/slideshow/KULK%7D9K%24GWFDL6%25K5%5BOYBL8.jpg'
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src='https://songidea.oss-cn-beijing.aliyuncs.com/medical/slideshow/YTJMJI2A%29WBOFAOJHPE%404%28K.jpg'
          alt=""
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      swiperImg: [],
    };
  },
  computed: {
    ...mapState(["swiperData"]),
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
