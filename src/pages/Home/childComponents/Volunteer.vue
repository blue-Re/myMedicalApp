<template>
  <transition name="move">
    <div id="volunteer">
      <Navbar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title" class="title">
          <div>志愿活动</div>
        </div>
        <div slot="right" @click="goTopublish()">
          <div class="right">
            <i class="iconfont icon-jia2" style="font-size: 25px; display: block"></i>
          </div>
        </div>
      </Navbar>
      <van-search v-model="value" class="search" placeholder="请输入搜索关键词" />
      <div class="activity">
        <div class="image" @click="goToActivityDeatil('/home/activityDeatil')">
          <img src="../img/1.jpg" alt="" />
        </div>
        <div class="actName" @click="goToActivityDeatil('/home/activityDeatil')">
          <div class="name">面膜比较试验购</div>
        </div>
        <div class="otherUseful">
          <ul class="tools">
            <li class="list">
              <div class="littleFont">
                <i
                  class="iconfont icon-dianzan"
                  @click="tags"
                  :class="{ active: isActive }"
                ></i
                ><span>{{ count }}</span>
                <i class="iconfont icon-fenxiang" @click="showBottom"></i>
                <div class="bottomCon">
                  <input type="text" placeholder="请输入对应内容" class="input" v-model="commentContent"/>
                  <button class="button" @click="_comment">评论</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <transition name="bottom">
        <div class="footer" v-show="isShowBottom">
          <div class="elements">
            <div class="options">
              <div class="content">
                <i class="iconfont icon-weixin" style="color: green"></i>
                <div class="words">分享微信</div>
              </div>
            </div>
            <div class="options">
              <div class="content">
                <i class="iconfont icon-qq" style="color: skyblue"></i>
                <div class="words">分享QQ</div>
              </div>
            </div>
            <div class="options">
              <div class="content">
                <i class="iconfont icon-shoucang" style="color: yellow"></i>
                <div class="words">收藏</div>
              </div>
            </div>
            <div class="options">
              <div class="content">
                <i class="iconfont icon-liulanqi" style="color: blue"></i>
                <div class="words">在浏览器中打开</div>
              </div>
            </div>
          </div>
          <div class="elements">
            <div class="options">
              <div class="content">
                <i class="iconfont icon-copy"></i>
                <div class="words">复制链接</div>
              </div>
            </div>
            <div class="options">
              <div class="content">
                <i class="iconfont icon-shuaxin_huaban1"></i>
                <div class="words">刷新</div>
              </div>
            </div>
            <div class="options">
              <div class="content">
                <i class="iconfont icon-sousuo_huaban1"></i>
                <div class="words">搜索页面内容</div>
              </div>
            </div>
            <div class="options">
              <div class="content">
                <i class="iconfont icon-tousu"></i>
                <div class="words">投诉</div>
              </div>
            </div>
          </div>
          <div class="cancel" @click="off">
            <div class="fork"><i class="iconfont icon-cha"></i></div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import LeftBack from "../../../components/LeftBack/LeftBack";
import Navbar from "../../../components/NavBar/NavBar";
import { Toast } from "vant";

import { comment } from "../../../api/home";

import {mapState} from 'vuex'

export default {
  data() {
    return {
      value: "",
      count: 0,
      isActive: false,
      isShowBottom: false,
      showActivity: {},
      a_id: 1123123123123123,
      content: "养老",
      commentContent:''
    };
  },
  computed:{
    ...mapState(['token'])
  },
  components: {
    Navbar,
    LeftBack,
  },
  methods: {
    back() {
      this.$router.go(-1);
      Toast("返回成功！");
    },
    tags() {
      this.isActive = true;
      this.count++;
      Toast(`您点赞了${this.count}次`);
      console.log(this.token)
    },
    showBottom() {
      this.isShowBottom = !this.isShowBottom;
    },
    off() {
      if (this.isShowBottom) {
        this.isShowBottom = false;
      }
    },
    goTopublish() {
      this.$router.push({
        path: "publish",
      });
    },
    goToActivityDeatil(path) {
      this.$router.replace(path);
    },
    _comment() {
      comment(this.a_id,this.content,this.token).then(res=>{
        console.log(res)
      })
      console.log(this.commentContent)
    },
  },
};
</script>

<style lang="less" scoped>
#volunteer {
  z-index: 2;
  position: relative;
  height: 100%;
  overflow: hidden;
  .search {
    margin-top: 46px;
  }
  .activity {
    // height: 100%;
    width: 98%;
    // background-color: orange;
    margin: auto;
    .image {
      height: 210px;
      width: 100%;
      background-color: #bfa;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .actName {
      height: 50px;
      // background-color: pink;
      .name {
        padding-top: 10px;
        text-align: center;
        font-size: 20px;
      }
    }
    .otherUseful {
      height: 300px;
      // background-color: deepskyblue;
      // display: flex;
      .tools {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        .list {
          flex: 1;
          // background-color: yellowgreen;
          margin-left: 2%;
          .littleFont {
            .active {
              color: green;
            }
            .icon-fenxiang {
              margin-left: 7%;
            }
            i {
              display: inline-block;
              font-size: 25px;
              color: rgb(153, 153, 153);
              // margin-right: 20px;
            }
          }
          .bottomCon {
            height: 100%;
            width: 80%;
            position: relative;

            .input {
              width: 100%;
              height: 30px;
              outline-color: orange;
              border: 1px solid rgb(153, 153, 153);
              border-radius: 5%;
              margin-top: 3%;
            }
            .button {
              height: 35px;
              text-align: center;
              width: 60px;
              position: absolute;
              left: 103%;
              top: 18%;
              background-color: rgb(67, 207, 124);
              border: none;
              color: white;
              // bottom: 5%;
            }
          }
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 200px;
    background-color: pink;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    .elements {
      width: 100%;
      flex: 1;
      background-color: rgba(216, 177, 177, 0.911);
      display: flex;
      .options {
        flex: 1;
        display: flex;
        align-items: center;
        border-radius: 50%;
        background-color: white;

        .content {
          width: 100%;
          text-align: center;
          .iconfont {
            font-size: 30px;
          }
          .words {
            // width: 100%;
            font-size: 12px;
          }
        }
      }
    }
    .cancel {
      position: absolute;
      right: 0;
      .iconfont {
        font-size: 18px;
      }
    }
  }
}
.move-enter-active,
.move-leave-active {
  transition: all 0.3s;
}
.move-enter,
.move-leave-to {
  transform: translate3d(100%, 0, 0);
}

.bottom-enter-active,
.bottom-leave-active {
  transition: all 0.3s;
}
.bottom-enter,
.bottom-leave-to {
  transform: translateY(100%);
}
</style>
