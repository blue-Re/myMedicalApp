<template>
  <keep-alive>
    <div id="everyRecommend">
      
      <van-tabs v-model="active" sticky background="rgb(3,190,141)" title-active-color="white" swipeable color="white">
        <van-tab title="饮食健康">
          <ul class="foodHealth">
            <li class="lists" @click="goToCherry">
              <div class="leftWords">
                <span>杨梅、樱桃用盐水泡除虫！怎样买到放心的呢？</span>
                <div class="author"><span>作者：兰晓芳</span></div>
              </div>
              <div class="rightImg">
                <img src="../Mine/img/1.jpg" alt="" />
              </div>
            </li>
            <li class="lists" @click="goTomilk">
              <div class="leftWords">
                <span>每天一杯酸奶，能预防糖尿病？还真有几分道理</span>
                <div class="author"><span>作者：范志红</span></div>
              </div>
              <div class="rightImg">
                <img src="../Mine/img/1.jpg" alt="" />
              </div>
            </li>
            <li class="lists">
              <div class="leftWords">
                <span>这四个真相，让你重新认识味精和鸡精</span>
                <div class="author"><span>作者：付婷</span></div>
              </div>
              <div class="rightImg">
                <img src="../Mine/img/1.jpg" alt="" />
              </div>
            </li>
            <li class="lists">
              <div class="leftWords">
                <span>什么？吃凉粉竟然等于吃白糖！类似这种情况应该如何处理</span>
                <div class="author"><span>作者：马莎佰</span></div>
              </div>
              <div class="rightImg">
                <img src="../Mine/img/1.jpg" alt="" />
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
                <img src="../Mine/img/1.jpg" alt="" />
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
                <img src="../Mine/img/1.jpg" alt="" />
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
                <img src="../Mine/img/1.jpg" alt="" />
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
                <img src="../Mine/img/1.jpg" alt="" />
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
        <van-tab title="孕产育儿">内容 2</van-tab>
        <van-tab title="常见疾病">内容 3</van-tab>
      </van-tabs>
    </div>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      title: ["饮食健康", "孕产育儿", "常见疾病"],
      active: 2,
    };
  },
  methods: {
    isActive(item, index) {
      console.log(item, index);
      this.currentIndex = index;
    },
    goToCherry() {
      this.$router.push({
        path: "/vedio/cherry",
      });
    },
    goTomilk() {
      this.$router.push({
        path: "vedio/milk",
      });
    },
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
