<template>
  <Move>
    <div id="volunteer" slot="Move">
      <Navbar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title" class="title">
          <div>志愿活动</div>
        </div>
        <div slot="right" @click="goTo('/home/publish')">
          <div class="right">
            <i class="iconfont icon-jia2" style="font-size: 25px; display: block"></i>
          </div>
        </div>
      </Navbar>
      <van-search v-model="value" class="search" placeholder="请输入搜索关键词" />
      <div class="activity" v-for="(activity, index) in allActivity">
        <div class="actName" @click="goTo('/home/activityDeatil')">
          <div class="name">
            <div class="theme">活动主题：{{ activity.theme }}</div>
            <!-- <div class="username">活动组织者：{{ activity.username }}</div>
            <div class="create_time">活动开始时间：{{ activity.create_time }}</div>
            <div class="address">活动地点：{{ activity.address }}</div>
            <div class="peoplenum">活动人数：{{ activity.peoplenum }}</div>
            <div class="ActivityContent">活动内容：{{ activity.content }}</div> -->
            <div class="id">活动编号：{{ activity.id }}</div>
          </div>
        </div>
        <div class="image" @click="goTo('/home/activityDeatil')">
          <img
            :src="
              activity.pic_address
                ? activity.pic_address
                : 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F17%2F02%2F16%2F6ee1508aca7cf35a7c69c99456f9eac8.jpg%21%2Ffwfh%2F804x401%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue&refer=http%3A%2F%2Fku.90sjimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621779256&t=83f1ae413bf77e03e8c82f4e15d67464'
            "
            alt=""
          />
        </div>

        <!-- <div class="otherUseful">
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
        </div> -->
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
  </Move>
</template>

<script>
import LeftBack from "../../../components/LeftBack/LeftBack";
import Navbar from "../../../components/NavBar/NavBar";
import Move from '../../../components/Move/Move'
import { Toast } from "vant";

import { comment } from "../../../api/home";

import { mapState } from "vuex";

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
      commentContent: "",
    };
  },
  computed: {
    ...mapState(["token", "allActivity"]),
  },
  components: {
    Navbar,
    LeftBack,
    Move
  },
  created() {
    this.$store.dispatch("getAllActivity");
  },
  methods: {
    tags() {
      this.isActive = true;
      this.count++;
      Toast(`您点赞了${this.count}次`);
      console.log(this.token);
    },
    showBottom() {
      this.isShowBottom = !this.isShowBottom;
    },
    off() {
      if (this.isShowBottom) {
        this.isShowBottom = false;
      }
    },
    goTo(path) {
      this.$router.push(path);
    },
    // 调用评论方法
    _comment() {
      comment(this.a_id, this.content, this.token).then((res) => {
        console.log(res);
      });
      console.log(this.commentContent);
    },
  },
};
</script>

<style lang="less" scoped>
#volunteer {
  z-index: 2;
  position: relative;
  height: 100%;
  overflow: scroll;
  .search {
    margin-top: 46px;
  }
  .activity {
    height: 90%;
    width: 98%;
    background-color: orange;
    margin: auto;
    border: 1px solid deeppink;
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
      // height: 50px;
      // background-color: pink;
      .name {
        padding-top: 10px;
        text-align: left;
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

</style>
