<template>
  <keep-alive exclude="Volunteer">
    <div id="Home">
      <NavBar>
        <span slot="left">
          <span class="location">晋中</span>
          <span>
            <i class="iconfont icon-arrow-down"></i>
          </span>
        </span>
        <div slot="title" class="title">
          <van-search class="search" shape="round" placeholder="请输入搜索内容" />
        </div>
        <span slot="right" @click="goTo('/login')">
          <van-icon name="user-o" size="20" />
        </span>
      </NavBar>
      <Swiper></Swiper>
      <div class="banner" v-show="diseaseInfo!==''">
        <div class="fourItemWrapper">
          <div class="fourItem" @click="goTo('/home/vaccine')">
            <i class="iconfont icon-yimiao"></i>
            <div class="words">疫苗助手</div>
          </div>
        </div>
        <div class="fourItemWrapper">
          <div class="fourItem" @click="goTo('/home/volunteer')">
            <i class="iconfont icon-zhiyuanfuwu-01"></i>
            <div class="words">志愿活动</div>
          </div>
        </div>
        <div class="fourItemWrapper">
          <div class="fourItem" @click="goTo('/home/illness')">
            <i class="iconfont icon-wenjuan"></i>
            <div class="words">疾病查询</div>
          </div>
        </div>
        <div class="fourItemWrapper">
          <div class="fourItem" @click="goTo('/home/identify')">
            <i class="iconfont icon-iconset0255"></i>
            <div class="words">药品识别</div>
          </div>
        </div>
      </div>

      <div class="bgImage" v-show="diseaseInfo!==''">
        <!-- <a href="https://ada.baidu.com/site/tyadsjk.com/xyl?imid=4d17a9b1127365e2f8a7842a747f6958&bdpc8&bd_vid=nHDdn1TYPjRvrjbYPWmdP161PjwxnWcdg17xnH0s&renqun_youhua=473868#back1619784045671">
        <img src="./img/list2.jpg" @click="seek"/>
        </a> -->
        <img src="./img/list2.jpg" @click="seek"/>
      </div>
      <van-loading size="24px" v-show="diseaseInfo===''">加载中...</van-loading>
      <div class="epidemicWrapper" v-show="diseaseInfo!==''">
        <div class="topNav">
          <div class="leftWords">
            <span class="epidemicWords">新冠肺炎疫情动态</span>
            <div class="bottomWords" v-if="diseaseInfo!==''">截至{{diseaseInfo.country.time}}</div>
          </div>
        </div>
        <div class="otherEpidemic">
          <!-- <div class="seaSide">
            <div>海外疫情</div>
          </div>
          <div class="homeLand">
            <div>国内疫情</div>
          </div> -->
          <van-tabs type="card"  v-if="diseaseInfo!==''">
            <van-tab title="全国疫情">
              <div class="countWrapper">
                <div class="countContent">
                  <span class="count">{{diseaseInfo.country.totalCured}}</span>
                  <div class="words">累计治愈</div>
                </div>
                <div class="countContent">
                  <span class="count">{{diseaseInfo.country.totalDeath}}</span>
                  <div class="words">累计死亡</div>
                </div>
                <div class="countContent">
                  <span class="count">{{diseaseInfo.country.totalConfirmed}}</span>
                  <div class="words">累计确诊</div>
                </div>
                <div class="countContent">
                  <span class="count">{{diseaseInfo.country.totalDoubtful}}</span>
                  <div class="words">疑似病例</div>
                </div>
              </div>
              <ul class="regions">
                <li class="regionsLists">
                  <span class="words">香港</span>
                  <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
                </li>
                <li class="regionsLists">
                  <span class="words">新疆</span>
                  <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
                </li>
                <li class="regionsLists">
                  <span class="words">辽宁</span>
                  <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
                </li>
                <li class="regionsLists">
                  <span class="words">云南</span>
                  <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
                </li>
              </ul>
            </van-tab>
            <van-tab title="山西疫情(含境外输入)">
              <div class="countWrapper">
                <div class="countContent">
                  <span class="count">{{shanxiInfo.totalCured}}</span>
                  <div class="words">累计治愈</div>
                </div>
                <div class="countContent">
                  <span class="count">{{shanxiInfo.totalDeath}}</span>
                  <div class="words">累计死亡</div>
                </div>
                <div class="countContent">
                  <span class="count">{{shanxiInfo.totalConfirmed}}</span>
                  <div class="words">累计确诊</div>
                </div>
                <div class="countContent">
                  <span class="count">{{shanxiInfo.totalIncrease}}</span>
                  <div class="words">累计新增</div>
                </div>
              </div>
              <ul class="regions">
                <li class="regionsLists">
                  <span class="words">香港</span>
                  <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
                </li>
                <li class="regionsLists">
                  <span class="words">新疆</span>
                  <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
                </li>
                <li class="regionsLists">
                  <span class="words">辽宁</span>
                  <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
                </li>
                <li class="regionsLists">
                  <span class="words">云南</span>
                  <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
                </li>
              </ul>
            </van-tab>
          </van-tabs>
        </div>
      </div>

      <div class="medicalEncyclopedia" v-show="diseaseInfo!==''">
        <div class="nav">
          <span class="medical">医学百科</span>
          <span class="more"
            >更多<i class="iconfont icon-arrowRight-copy-copy-copy"></i
          ></span>
        </div>
        <div class="illness">
          <ul class="illnessLists" >
            <li class="list" v-for="(item,index) in allEssay" :key="index" @click="goTo(`/home/essay/${index}`)">
              <div class="img">
                <img :src="item.title_pic" style="width: 70px; height: 70px" alt="" />
              </div>
              <div class="rightDescription">
                <div class="title">{{item.title}}</div>
                <p class="description" >
                  人间百态，啥人都能遇上，怎么办?“面对它、接受它、处理它，放下它。”是最好的办法了。面对、接受、处理、放下，是完成一件事情的全部过程。
                </p>
              </div>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
import NavBar from "../../components/NavBar/NavBar";
import Swiper from "./childComponents/Swiper";
import { Toast } from "vant";

import {  getDiseaseInfo } from "../../api/home";
import { mapState } from 'vuex';
export default {
  name:'Home',
  data(){
    return {
      diseaseInfo:'',
      shanxiInfo:[],
    }
  },
  components: {
    NavBar,
    Swiper,
  },
  computed:{
    ...mapState(['allEssay'])
  },
  mounted() {
    this.$store.dispatch("getSwiper");
    // 获取疫情动态
    this._getDiseaseInfo();
    // 获取所有的文章
    this.$store.dispatch('_getAllEssay')
  },
  methods: {
    goTo(gotoPath) {
      this.$router.push({ path: gotoPath });
    },
    _getDiseaseInfo() {
      getDiseaseInfo().then((res) => {
        this.diseaseInfo = res
        this.shanxiInfo = res.provinceArray[26]
      });
    },
    seek(){
      window.location.href = "https://ada.baidu.com/site/tyadsjk.com/xyl?imid=4d17a9b1127365e2f8a7842a747f6958&bdpc8&bd_vid=nHDdn1TYPjRvrjbYPWmdP161PjwxnWcdg17xnH0s&renqun_youhua=473868#back1619784045671"
    },
    
  },
};
</script>

<style lang="less" >
/* html{
touch-action:none;
touch-action:pan-y;

} */
#Home {
  width: 100%;
  // overflow: scroll;
  background-color: #ececec;
  // height: calc(100vh + 40px);
  overflow: scroll;
  height: 100vh;
  .loading {
    padding-top: 46px;
  }
  .location {
    color: green;
  }
  .title {
    .search {
      // border-radius: 15%;
      padding: 0;
      // border:1px solid green;
      // border-color: green;
      background-color: rgb(3, 190, 141);
    }
  }
  .banner {
    height: 65px;
    width: 96%;
    margin-left: 2%;
    margin-bottom: 2%;
    // background-color: purple;
    display: flex;
    padding-top: 3%;
    border-radius: 15px;
    background-color: azure;
    .fourItemWrapper {
      display: flex;
      height: 100%;
      flex: 1;
      text-align: center;
      align-items: center;
      .fourItem {
        text-align: center;
        flex: 1;
        // background-color: #bfa;
        height: 100%;
        .iconfont {
          font-size: 35px;
          color: rgb(3, 190, 141);
        }
        .words {
          font-size: 12px;
        }
      }
    }
  }
  .bgImage {
    width: 96%;
    /* margin: 0 1%; */
    margin-left: 2%;
    height: 200px;
    img {
      height: 100%;
      width: 100%;
      border-radius: 15px;
    }
  }
  .epidemicWrapper {
    border-radius: 15px;
    background-color: white;
    width: 96%;
    height: 190px;
    margin-left: 2%;
    .topNav {
      height: 40px;
      width: 100%;
      margin: 3% 0;
      // background-color: aqua;
      .leftWords {
        margin-left: 2%;
        .shanxi {
          font-size: 14px;
          float: right;
          color: rgb(3, 190, 141);
        }
        .epidemicWords {
          // margin-top: 4px;
          color: red;
          font-weight: bold;
        }
        .bottomWords {
          font-size: 1rem;
          color: rgb(153, 153, 153);
        }
      }
    }
    .otherEpidemic {
      height: 40px;
      width: 100%;
      // background-color: blueviolet;
      // display: flex;
      font-weight: bold;
      .van-tabs__nav--card {
        // width: 360px;
        margin: 0 5px;
      }
      .seaSide {
        display: flex;
        flex: 1;
        // text-align: center;
        align-items: center;
        background-color: rgb(229, 229, 229);
        div {
          margin: 0 auto;
        }
      }
      .homeLand {
        display: flex;
        flex: 1;
        background-color: white;
        align-items: center;
        margin: 0 auto;
        div {
          // text-align: center;
          margin: 0 auto;
        }
      }
    }
    .countWrapper {
      width: 100%;
      height: 70px;
      // background-color: brown;
      display: flex;
      .countContent {
        flex: 1;
        text-align: center;
        margin-top: 15px;
        .count {
          color: rgb(251, 158, 47);
        }
        .words {
          color: rgb(56, 56, 56);
        }
      }
    }
    .regions {
      display: flex;
      .regionsLists {
        flex: 1;
        text-align: center;
        .iconfont {
          margin-left: 5px;
        }
      }
    }
  }
  .medicalEncyclopedia {
    width: 98%;
    padding-bottom: 50px;
    // height: 300px;
    // background-color: red;
    margin: 0 auto;
    border-radius: 5%;
    margin: 3% 0;
    .nav {
      width: 96%;
      height: 30px;
      border-radius: 15px;
      margin-left: 3%;
      // padding-top: 2px;
      background-color: rgb(3, 190, 141);
      // text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .medical {
        font-weight: bold;
        margin-left: 3%;
        color: white;
      }
      .more {
        color: rgb(56, 56, 56);
        margin-right: 2%;
        color: white;
      }
    }
    .illness {
      width: 100%;
      // height: 300px;
      // background-color: yellow;
      .illnessLists {
        width: 100%;
        // height: 250px;
        // background-color: yellowgreen;
        .list {
          display: flex;
          background-color: white;
          width: 96%;
          margin: 2% 3%;
          border-radius: 14px;
          .img {
            img {
              border-radius: 15%;
            }
          }
          .rightDescription {
            // display: flex;
            margin-left: 10px;
            // align-items: center;
            .title {
              font-size: 13px;
              font-weight: bold;
            }
            .description {
              width: 98%;
              margin: 0;
              font-size: 13px;
              color: rgb(166, 166, 166);
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3;
              overflow: hidden;
            }
          }
        }
      }
    }
  }
}
</style>
