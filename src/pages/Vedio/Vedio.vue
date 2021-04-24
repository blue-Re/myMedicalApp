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
        <van-tab title="饮食健康">
          <ul class="foodHealth">
            <li class="lists" @click="goTo('/vedio/cherry')">
              <div class="leftWords">
                <span>杨梅、樱桃用盐水泡除虫！怎样买到放心的呢？</span>
                <div class="author"><span>作者：兰晓芳</span></div>
              </div>
              <div class="rightImg">
                <img src="./img/杨梅.png" alt="" />
              </div>
            </li>
            <li class="lists" @click="goTo('/vedio/milk')">
              <div class="leftWords">
                <span>每天一杯酸奶，能预防糖尿病？还真有几分道理</span>
                <div class="author"><span>作者：范志红</span></div>
              </div>
              <div class="rightImg">
                <img src="./img/酸奶预防糖尿病.png" alt="" />
              </div>
            </li>
            <li class="lists">
              <div class="leftWords">
                <span>这四个真相，让你重新认识味精和鸡精</span>
                <div class="author"><span>作者：付婷</span></div>
              </div>
              <div class="rightImg">
                <img src="./img/味精.png" alt="" />
              </div>
            </li>
            <li class="lists">
              <div class="leftWords">
                <span>什么？吃凉粉竟然等于吃白糖！类似这种情况应该如何处理</span>
                <div class="author"><span>作者：马莎佰</span></div>
              </div>
              <div class="rightImg">
                <img src="./img/凉粉凉皮.png" alt="" />
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
                <img src="./img/老年慢性病管理.png" alt="" />
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
                <img src="./img/银屑病治疗.png" alt="" />
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
                <img src="./img/单侧声带麻痹治疗.png" alt="" />
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
                <img src="./img/如何进行银屑病关节病自我筛查.png" alt="" />
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
        <van-tab title="急救指南">
          <ul class="foodHealth">
            <li class="lists" @click="goTo()">
              <div class="leftWords">
                <span>眼睛进了沙子，首先要进行大量水的冲洗</span>
                <div class="author"><span>作者：郝芳</span></div>
              </div>
              <div class="rightImg">
                <img src="./img/眼睛进沙子.png" alt="" />
              </div>
            </li>
            <li class="lists" @click="goTo()">
              <div class="leftWords">
                <span>鱼刺卡住喉咙，该如何快速急救</span>
                <div class="author"><span>作者：于小慧</span></div>
              </div>
              <div class="rightImg">
                <img src="./img/鱼刺.png" alt="" />
              </div>
            </li>
            <li class="lists">
              <div class="leftWords">
                <span>噎食后自救法</span>
                <div class="author"><span>作者：戴晓婷</span></div>
              </div>
              <div class="rightImg">
                <img src="./img/吃东西被噎住.png" alt="" />
              </div>
            </li>
            <li class="lists">
              <div class="leftWords">
                <span>如果察觉飞虫入耳，千万不可以用掏耳勺去乱挖</span>
                <div class="author"><span>作者：琪琪</span></div>
              </div>
              <div class="rightImg">
                <img src="./img/虫子入耳.png" alt="" />
              </div>
            </li>
          </ul>
        </van-tab>
        <van-tab title="常见疾病">
          <ul class="foodHealth">
            <li class="lists" @click="goTo()" v-for="(item,index) in mockData">
              <div class="leftWords">
                <span>{{item.title}}</span>
                <div class="author"><span>作者：{{item.username}}</span></div>
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
import {reqMockData} from '../../mockjs/reqMock' //引入模拟数据
export default {
  mounted(){
    reqMockData().then(res=>{
      console.log(res)
      this.mockData = res.data
    })
  },
  data() {
    return {
      active: 2,
      mockData:[]
    };
  },
  methods: {
    goTo(path){
      this.$router.push(path)
    }
  },
};
</script>
<style lang="less" scoped>
#everyRecommend {
  // background-color: #bfa;
  height: 100vh;
  // overflow: hidden;
  overflow: scroll;
  z-index: 1;

  .foodHealth {
    .lists {
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgb(229, 229, 229);
      .leftWords {
        width: 100%;
        font-weight: bold;
        font-size: 14px;
        margin: 0 5%;
        .author {
          margin-top: 8px;
          font-size: 10px;
          color: rgb(166, 166, 166);
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
    // background-color: yellow;
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
