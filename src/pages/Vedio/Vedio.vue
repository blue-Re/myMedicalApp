<template>
  <keep-alive>
    <div id="everyRecommend">
      <van-tabs
        v-model="active"
        sticky
        background="rgb(3,190,141)"
        animated
        swipeable
        title-active-color="white"
        color="white"
        title-inactive-color="black"
      >
        <van-tab title="急救指南">
          <ul class="foodHealth">
            <li
              class="lists"
              @click="goTo(`/vedio/emergency/${item.id}`)"
              v-for="(item, index) in emergencyData"
            >
              <div class="leftWords">
                <span>{{ item.name }}</span>
                <div class="author">
                  <span>{{ item.content }}</span>
                </div>
              </div>
              <div class="rightImg">
                <img :src="item.img" alt="" />
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="饮食健康">
          <ul class="foodHealth">
            <li
              class="lists"
              @click="goTo(`/vedio/FoodHealth/${item.id}`)"
              v-for="(item, index) in foodHealthData"
            >
              <div class="leftWords">
                <span>{{ item.name }}</span>
                <div class="author">
                  <span>{{ item.content }}</span>
                </div>
              </div>
              <div class="rightImg">
                <img :src="item.img" alt="" />
              </div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
import { reqEmergency, reqFoodHealth } from "../../mockjs/reqMock"; //引入模拟数据
export default {
  name: "Vedio",
  mounted() {
    reqEmergency().then((res) => {
      this.emergencyData = res.data;
    });
    reqFoodHealth().then((res)=>{
      this.foodHealthData = res.data
    })
  },
  data() {
    return {
      active: 2,
      // mockDataOftenIllness: [],
      emergencyData: [],
      foodHealthData:[]
    };
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style lang="less" scoped>
#everyRecommend {
  background-color: #ececec;
  // height: 100vh;
  // height: calc(100vh + 50px);
  // overflow: hidden;
  // height: 100%;
  // overflow: scroll;
  z-index: 5;

  .foodHealth {
    padding-bottom: 50px;
    .lists {
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgb(229, 229, 229);
      width: 96%;
      margin-left: 2%;
      background-color: white;
      border-radius: 14px;
      margin-top: 2%;
      .leftWords {
        width: 100%;
        font-weight: bold;
        font-size: 14px;
        margin: 0 5%;
        .title {
          margin-top: 2%px;
        }
        .author {
          margin-top: 2%;
          font-size: 10px;
          color: rgb(166, 166, 166);
          span {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }
      }
      .rightImg {
        margin: 2% 4%;
        img {
          width: 75px;
          height: 75px;
          border-radius: 10%;
        }
      }
    }
  }
  .doctorSpeech {
    background-color: #ececec;
    // height: 430px;
    padding-bottom: 50px;
    .navbar {
      height: 30px;
      // background-color: red;
      display: flex;
      .left {
        flex: 1;
        padding-top: 1%;
        margin-left: 5%;
        span {
          font-size: 15px;
          font-weight: bold;
        }
      }
      .right {
        padding-top: 1%;
        margin-right: 4%;
        span {
          color: rgb(166, 166, 166);
        }
      }
    }
    .list {
      display: flex;
      width: 96%;
      margin: 2% 1%;
      background-color: white;
      border-radius: 14px;
      .leftImg {
        margin: 2% 5%;
        img {
          width: 70px;
          height: 70px;
          border-radius: 10%;
        }
      }
      .rightDes {
        width: 100%;
        margin: auto 0;
        .words {
          // text-align: center;
          font-size: 15px;
          font-weight: bold;
        }
        .button {
          margin-left: 70%;
          margin-top: 5%;
        }
      }
    }
  }
}
</style>
