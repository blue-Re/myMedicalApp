<template>
  <keep-alive>
    <div id="Mine">
      <div class="navbar">
        <NavBar>
          <div slot="title" class="topTitle">我的</div>
          <div slot="right">
            <div class="icon-font">
              <van-icon
                name="setting-o"
                size="22"
                color="white"
                class="ico"
                @click="goTo('/mine/mysetting')"
              />
              <i class="iconfont icon-tixing1"></i>
            </div>
          </div>
        </NavBar>
      </div>
      <div class="info">
        <div class="info-item">
          <div class="avator">
            <img
              v-if="token"
              src="https://songidea.oss-cn-beijing.aliyuncs.com/medical/head_sculpture_default.png"
              alt=""
            />
            <img
              v-else
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201912%2F25%2F20191225224833_zloky.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622130654&t=e69b7eff75e8b3257f6cad304f112f31"
              alt=""
            />
            <div class="rightEle">
              <span class="name" v-if="token">{{ userInfo }}</span>
              <router-link to="/login" class="name" v-else>登录||注册</router-link>
              <div class="bottomContent" v-if="token">
                <i class="iconfont icon-pencil"></i>
                <span>：成功很难，坚持一定很酷！</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="threeSelect">
        <div class="threeItem">
          <div @click="goTo('/mine/manhealth')">
            <span class="content">
              <i class="iconfont icon-nanxing"></i>
              <span>男性健康</span>
            </span>
          </div>
        </div>
        <div class="threeItem">
          <div @click="goTo('/mine/womenhealth')">
            <span class="content">
              <i class="iconfont icon-nvxing"></i>
              <span>关爱女性</span>
            </span>
          </div>
        </div>
        <div class="threeItem">
          <div @click="goTo('/mine/buymedicine')">
            <span class="content">
              <i class="iconfont icon-yaopin"></i>
              <span>购买医药</span>
            </span>
          </div>
        </div>
      </div>

      <div class="healthWrapper">
        <div class="healthService">
          <span>健康服务</span>
        </div>
        <ul class="serviceLists">
          <li class="lists" @click="goTo('/mine/myactivity')">
            <div>
              <span class="leftIcon"
                ><i class="iconfont left-icon icon-huodong"></i
              ></span>
              <span class="words">我的活动</span>
              <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
            </div>
          </li>
          <li class="lists" @click="goTo('/mine/questionnaire')">
            <div>
              <span class="leftIcon"
                ><i class="iconfont left-icon icon-tiaocha"></i
              ></span>
              <span class="words">问卷调查</span>
              <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
            </div>
          </li>
          <li class="lists" @click="goTo('/mine/healthAlert')">
            <div>
              <span class="leftIcon"><i class="iconfont left-icon icon-tixing"></i></span>
              <span class="words">健康提醒</span>
              <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
            </div>
          </li>
        </ul>
      </div>

      <div class="toolsWrapper">
        <div class="otherTools">
          <span>其他工具</span>
        </div>
        <ul class="otherService">
          <div class="serviceLists">
            <li class="lists" @click="goTo('/mine/contact')">
              <div class="content">
                <span class="leftIcon"
                  ><i class="iconfont left-icon icon-lianxi1"></i
                ></span>
                <span class="words">联系客服</span>
                <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
              </div>
            </li>
            <li class="lists" @click="goTo('/mine/feedback')">
              <div class="content">
                <span class="leftIcon"
                  ><i class="iconfont left-icon icon-fankui"></i
                ></span>
                <span class="words">我要反馈</span>
                <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
              </div>
            </li>
            <li class="lists" @click="goTo('/mine/about')">
              <div class="content">
                <span class="leftIcon"
                  ><i class="iconfont left-icon icon-guanyu"></i
                ></span>
                <span class="words">关于</span>
                <i class="iconfont icon-arrowRight-copy-copy-copy"></i>
              </div>
            </li>
          </div>
        </ul>
        <van-button
          type="danger"
          round
          size="large"
          class="logout"
          v-if="token"
          @click="signOut"
          >退出登录</van-button
        >
      </div>
    </div>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
import NavBar from "../../components/NavBar/NavBar";
import { mapState } from "vuex";
import { Dialog } from "vant";
export default {
  data() {
    return {
      scroll: null,
    };
  },

  computed: {
    ...mapState(["userInfo", "token"]),

    getToken() {
      return this.$store.state.token;
    },
  },
  components: {
    NavBar,
  },
  methods: {
    // 退出登录
    signOut() {
      Dialog.confirm({
        message: "是否退出登录？",
      })
        .then(() => {
          // 清除token
          this.$store.dispatch("clearToken");
          localStorage.removeItem("token");
          console.log(this.token);
        })
        .catch(() => {
          
        });
    },

    goTo(gotoPath) {
      this.$router.push({
        path: gotoPath,
      });
    },
  },
};
</script>

<style scoped lang="less">
#Mine {
  z-index: 1;
  height: 100vh;
  background-color: rgb(229, 229, 229);
  overflow: hidden;
  .wrapper {
    height: calc(~"100vh - 96px");
    // height: 600px;
    // background-color: aqua;
    overflow: hidden;
  }
  .navbar {
    background-color: yellow;
    .topTitle{
      color: white;
    }
    .icon-font {
      // margin-left: 5px;
      color: white;
      .iconfont {
        font-size: 24px;
        color: white;
        margin-left: 20px;
      }
      .ico {
        margin-left: 10px;
      }
    }
  }
  .info {
    height: 133px;
    width: 100%;
    padding-top: 46px;
    // background-color: rgb(118, 185, 173);
    background-color: white;
    .info-item {
      // height: 90px;
      height: 100%;
      // background-color: red;
      // padding-top: 30px;
      .avator {
        display: flex;
        align-items: center;
        height: 100%;
        background-color: rgb(118, 185, 173);
        .rightEle {
          width: 100%;
          text-align: center;
          // height: 100%;

          display: inline-block;
          // margin-left: 30%;
          // position: relative;
          margin: auto;
          // top: -20%;
          .name {
            font-size: 2rem;
            color: aliceblue;
          }
          .bottomContent {
            // margin-top: 4px;
            display: block;
            color: white;
            .vip {
              height: 26px;
              width: 48px;
              background-color: rgb(153, 153, 153);
              text-align: center;
              border-radius: 10%;
              span {
                position: relative;
                top: 4px;
                color: white;
              }
            }
            .emotions {
              height: 26px;
              width: 80px;
              margin-left: 15px;
              float: left;
              background-color: rgb(153, 153, 153);
              border-radius: 10%;
              span {
                color: white;
              }
              .emo-icon {
                position: relative;
                margin-left: 8px;
                margin-top: 4px;
              }
            }
          }
        }
        img {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          margin-left: 3%;
        }
      }
    }
  }
  .threeSelect {
    // padding-top: 5px;
    width: 100%;
    height: 40px;
    background-color: rgb(229, 229, 229);
    display: flex;
    .threeItem {
      flex: 1;
      text-align: center;
      position: relative;
      div {
        height: 100%;
        position: relative;
        // border-radius: 15%;
        background-color: gainsboro;
        .content {
          position: relative;
          top: 8px;
          .iconfont {
            color: rgb(42, 131, 78);
          }
        }
      }
    }
  }
  .healthWrapper {
    // width: 410px;
    margin-left: 2%;
    margin-top: 5px;
    width: 96%;
    height: 210px;
    background-color: white;
    border-radius: 15px;
    .healthService {
      height: 40px;
      // background-color: yellow;
      border-radius: 5%;
      border-bottom: 1px solid rgb(242, 242, 242);
      span {
        display: block;
        font-size: 20px;
        padding-top: 6px;
        font-weight: bold;
        text-align: center;
      }
    }
    .serviceLists {
      display: flex;
      flex-direction: column;
      .lists:last-child {
        border-bottom: 0;
      }
      .lists {
        display: flex;
        align-items: center;
        height: 55px;
        flex-grow: 1;
        justify-content: space-between;
        // background-color: orange;
        border-bottom: 1px solid rgb(242, 242, 242);
        div {
          display: flex;
          align-items: center;
          width: 100%;
          height: 40px;
          // background-color: aqua;
          margin-left: 15px;
          .words {
            font-size: 18px;
          }
          // margin: 9px 0;
          // padding-top: 9px;
          .leftIcon {
            font-size: 20px;
            width: 20px;
            // height: 20px;
          }
          .icon-arrowRight-copy-copy-copy {
            position: fixed;
            right: 5%;
            color: rgb(153, 153, 153);
            font-weight: bold;
          }
          .left-icon {
            // font-size: 20px;
            // width: 5px;
            display: inline-block;
            font-size: 16px;
            width: 16px;
            height: 16px;
            color: rgb(42, 131, 78);
          }
        }
      }
    }
  }
  .toolsWrapper {
    height: 225px;
    margin-left: 2%;
    width: 96%;
    background-color: white;
    margin-top: 5px;
    border-radius: 5%;
    .otherTools {
      height: 40px;
      width: 100%;
      // background-color: yellow;
      border-radius: 5%;
      border-bottom: 1px solid rgb(242, 242, 242);
      span {
        display: block;
        font-size: 20px;
        padding-top: 6px;
        font-weight: bold;
        text-align: center;
      }
    }
    .otherService {
      // height: 100%;
      // background-color: #bfa;
      .serviceLists {
        // height: 100%;
        // background-color: yellowgreen;
        .lists:last-child {
          border-bottom: 0;
        }
        .lists {
          height: 60px;
          border-bottom: 1px solid rgb(242, 242, 242);

          .content {
            margin-left: 15px;
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            .icon-arrowRight-copy-copy-copy {
              position: fixed;
              right: 5%;
              color: rgb(153, 153, 153);
              font-weight: bold;
            }
            .leftIcon {
              font-size: 20px;
              width: 20px;
            }
            .left-icon {
              // font-size: 20px;
              // width: 5px;
              display: inline-block;
              font-size: 16px;
              width: 16px;
              height: 16px;
              color: rgb(42, 131, 78);
            }
            .words {
              font-size: 18px;
            }
          }
        }
      }
    }
    .logout {
      margin-top: 4%;
    }
  }
}
</style>
