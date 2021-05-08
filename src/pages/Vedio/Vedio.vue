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
            <li class="lists" @click="goTo(`/vedio/emergency/${item.id}`)" v-for="(item,index) in emergencyData">
              <div class="leftWords">
                <span>{{item.name}}</span>
                <div class="author"><span>{{item.content}}</span></div>
              </div>
              <div class="rightImg">
                <img :src="item.img" alt="" />
              </div>
            </li>
            
          </ul>
        </van-tab>
        <van-tab title="饮食健康">
          <ul class="foodHealth">
            <li class="lists" @click="goTo('/vedio/cherry')">
              <div class="leftWords">
                <span>杨梅、樱桃用盐水泡除虫！怎样买到放心的呢？</span>
                <div class="author"><span>作者：兰晓芳</span></div>
              </div>
              <div class="rightImg">
                <img src="./img/cherry.jpeg" alt="" />
              </div>
            </li>
            <li class="lists" @click="goTo('/vedio/milk')">
              <div class="leftWords">
                <span>每天一杯酸奶，能预防糖尿病？还真有几分道理</span>
                <div class="author"><span>作者：范志红</span></div>
              </div>
              <div class="rightImg">
                <img src="./img/milk.png" alt="" />
              </div>
            </li>
            <li class="lists">
              <div class="leftWords">
                <span>这四个真相，让你重新认识味精和鸡精</span>
                <div class="author"><span>作者：付婷</span></div>
              </div>
              <div class="rightImg">
                <img src="./img/aginomoto.png" alt="" />
              </div>
            </li>
            <li class="lists">
              <div class="leftWords">
                <span>什么？吃凉粉竟然等于吃白糖！类似这种情况应该如何处理</span>
                <div class="author"><span>作者：马莎佰</span></div>
              </div>
              <div class="rightImg">
                <img src="./img/beanJelly.png" alt="" />
              </div>
            </li>
          </ul>
          <ul class="doctorSpeech">
            <div class="navbar">
              <div class="left">
                <span>医师讲堂</span>
              </div>
              <div class="right">
                <span> 更多<i class="iconfont icon-arrowRight-copy-copy-copy"></i> </span>
              </div>
            </div>
            <li class="list">
              <div class="leftImg">
                <img src="./img/oldIllness.png" alt="" />
              </div>
              <div class="rightDes">
                <div class="words">
                  <span>老年慢病管理与化合治疗</span>
                </div>
                <div class="button">
                  <van-button round type="info" size="small">我要学习</van-button>
                </div>
              </div>
            </li>
            <li class="list">
              <div class="leftImg">
                <img src="./img/psoriasis.png" alt="" />
              </div>
              <div class="rightDes">
                <div class="words">
                  <span>银屑病如何进行自我治疗</span>
                </div>
                <div class="button">
                  <van-button round type="info" size="small">我要学习</van-button>
                </div>
              </div>
            </li>
            <li class="list">
              <div class="leftImg">
                <img src="./img/vocal.png" alt="" />
              </div>
              <div class="rightDes">
                <div class="words">
                  <span>单声带麻痹治疗的选择！</span>
                </div>
                <div class="button">
                  <van-button round type="info" size="small">我要学习</van-button>
                </div>
              </div>
            </li>
            <li class="list">
              <div class="leftImg">
                <img src="./img/oneselfCheck.png" alt="" />
              </div>
              <div class="rightDes">
                <div class="words">
                  <span>如何进行关节病自我筛查</span>
                </div>
                <div class="button">
                  <van-button round type="info" size="small">我要学习</van-button>
                </div>
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
import { reqEmergency } from "../../mockjs/reqMock"; //引入模拟数据
export default {
  name:'Vedio',
  mounted() {
    reqEmergency().then(res=>{
      this.emergencyData = res.data
    })
  },
  data() {
    return {
      active: 2,
      mockDataOftenIllness: [],
      emergencyData:[]
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
  height: calc(100vh + 20px);
  // overflow: hidden;
  overflow: scroll;
  z-index: 1;

  .foodHealth {
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
        .title{
          margin-top: 2%px;
        }
        .author {
          margin-top: 2%;
          font-size: 10px;
          color: rgb(166, 166, 166);
          span{
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
    height: 430px;
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
