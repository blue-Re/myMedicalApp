<template>
  <keep-alive>
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
        <span slot="right" @click="onClickRight('/login')">
          <van-icon name="user-o" size="20" />
        </span>
      </NavBar>
      <Swiper></Swiper>
      <div class="banner">
        <div class="fourItemWrapper">
          <div class="fourItem" @click="goToVaccine()">
            <i class="iconfont icon-yimiao"></i>
            <div class="words">疫苗助手</div>
          </div>
        </div>
        <div class="fourItemWrapper">
          <div class="fourItem" @click="goToVolunteer()">
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
          <div class="fourItem" @click="goToIdentify()">
            <i class="iconfont icon-gongshi"></i>
            <div class="words">药品识别</div>
          </div>
        </div>
      </div>

      <div class="epidemicWrapper">
        <div class="topNav">
          <div class="leftWords">
            <span class="epidemicWords">新冠肺炎疫情动态</span>
            <div class="shanxi">
              <i class="iconfont icon-weizhi"></i>
              <span>山西疫情</span>
              <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
            </div>
            <div class="bottomWords">截至2021-04-22 09:02:23</div>
          </div>
        </div>
        <div class="otherEpidemic">
          <div class="seaSide">
            <div>海外疫情</div>
          </div>
          <div class="homeLand">
            <div>国内疫情</div>
          </div>
        </div>
        <div class="countWrapper">
          <div class="countContent">
            <span class="count">198053+</span>
            <div class="words">新增确诊</div>
          </div>
          <div class="countContent">
            <span class="count">125436</span>
            <div class="words">新增死亡</div>
          </div>
          <div class="countContent">
            <span class="count">125436</span>
            <div class="words">累计确诊</div>
          </div>
          <div class="countContent">
            <span class="count">125436</span>
            <div class="words">累计死亡</div>
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
      </div>

      <div class="medicalEncyclopedia">
        <div class="nav">
          <span class="medical">医学百科</span>
          <span class="more"
            >更多<i class="iconfont icon-arrowRight-copy-copy-copy"></i
          ></span>
        </div>
        <div class="illness">
          <ul class="illnessLists">
            <li class="list">
              <div class="img">
                <img src="./img/heart.png" style="width: 70px; height: 70px" alt="" />
              </div>
              <div class="rightDescription">
                <div class="title">心脏病</div>
                <p class="description">
                  心脏病是一类比较常见的循环系统疾病。循环系统由心脏、血管和调节血液循环的神经体液组织构成，循环系统疾病也称为心血管病，包括上述所有组织器官的疾病，在内科疾病中属于常见病，其中以心脏病最为多见，能显著地影响患者的劳动力。
                </p>
              </div>
            </li>
            <li class="list">
              <div class="img">
                <img src="./img/cancer.png" style="width: 70px; height: 70px" alt="" />
              </div>
              <div class="rightDescription">
                <div class="title">癌症</div>
                <p class="description">
                  在医学上，癌（cancer）是指起源于上皮组织的恶性肿瘤，是恶性肿瘤中最常见的一类。相对应的，起源于间叶组织的恶性肿瘤统称为肉瘤。有少数恶性肿瘤不按上述原则命名，如肾母细胞瘤、恶性畸胎瘤等。一般人们所说的“癌症”习惯上泛指所有恶性肿瘤。癌症具有细胞分化和增殖异常、生长失去控制、浸润性和转移性等生物学特征，其发生是一个多因子、多步骤的复杂过程，分为致癌、促癌、演进三个过程，与吸烟、感染、职业暴露、环境污染、不合理膳食、遗传因素密切相关。
                </p>
              </div>
            </li>
            <li class="list">
              <div class="img">
                <img src="./img/brain.png" style="width: 70px; height: 70px" alt="" />
              </div>
              <div class="rightDescription">
                <div class="title">脑梗</div>
                <p class="description">
                  脑梗死旧称脑梗塞，又称缺血性脑卒中（cerebral ischemic
                  stroke），是指因脑部血液供应障碍，缺血、缺氧所导致的局限性脑组织的缺血性坏死或软化。脑梗死的临床常见类型有脑血栓形成、腔隙性梗死和脑栓塞等，脑梗死占全部脑卒中的80%。与其关系密切的疾病有：糖尿病、肥胖、高血压、风湿性心脏病、心律失常、各种原因的脱水、各种动脉炎、休克、血压下降过快过大等。临床表现以猝然昏倒、不省人事、半身不遂、言语障碍、智力障碍为主要特征。脑梗死不仅给人类健康和生命造成极大威胁，而且给患者、家庭及社会带来极大的痛苦和沉重的负担。
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


export default {
  components: {
    NavBar,
    Swiper,
  },
  methods: {
    
    onClickRight(path) {
      Toast("请先登录");
      this.$router.replace(path);
    },
    goToIdentify() {
      this.$router.push({
        path: "/home/identify",
      });
    },
    goToVolunteer() {
      this.$router.push({
        path: "/home/volunteer",
      });
    },
    goToVaccine(){
      this.$router.push({
        path:'/home/vaccine'
      })
    },
    goTo(gotoPath){
      this.$router.push({path:gotoPath})
    }
  },
};
</script>

<style lang="less">
#Home {
  // overflow: hidden;
  // background-color: grey;
  height: 100vh;

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
    width: 100%;
    // background-color: purple;
    display: flex;
    margin: 3% 0;
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
  .epidemicWrapper {
    width: 100%;
    height: 190px;
    // background-color: #bfa;
    .topNav {
      height: 40px;
      width: 100%;
      margin: 3% 0;
      // background-color: aqua;
      .leftWords {
        margin-left: 10px;
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
      background-color: blueviolet;
      display: flex;
      font-weight: bold;
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
    // height: 300px;
    // background-color: red;
    margin: 0 auto;
    border-radius: 5%;
    margin: 3% 0;
    .nav {
      width: 100%;
      height: 30px;
      border-radius: 5%;
      // padding-top: 2px;
      background-color: rgb(142, 189, 161);
      // text-align: center;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .medical {
        font-weight: bold;
      }
      .more {
        color: rgb(56, 56, 56);
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
          // background-color: pink;
          margin: 8px 0;
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
