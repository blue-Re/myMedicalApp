<template>
  <Move>
    <div class="emergency" slot="Move">
      <NavBar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title" class="Name">饮食健康</div>
      </NavBar>
      
      <header class="topTitle" v-if="foodHealthData.length !== 0">
        <div class="title">{{ foodHealthData[id].name }}</div>
        <div class="cherryBg">
          <img :src="foodHealthData[id].img" alt="" />
        </div>
      </header>
      <section class="description" v-if="foodHealthData.length !== 0">
        <div class="words">
          {{ foodHealthData[id].content }}
        </div>
      </section>

      <!-- 评论 -->
      <div class="bottomTools">
        <div class="tools" @click="tag()">
          <i class="iconfont icon-dianzan"></i><br />
          <span>点赞</span>
        </div>
        <div class="tools" @click="noTag()">
          <i class="iconfont icon-dianzan1"></i><br />
          <span>不喜欢</span>
        </div>
        <div class="tools" @click="collect()">
          <i class="iconfont icon-shoucang"></i><br />
          <span>收藏</span>
        </div>
        <div class="tools" @click="showShare = true" @select="onSelect">
          <i class="iconfont icon-fenxiang"></i><br />
          <span>分享</span>
        </div>
      </div>

      <van-share-sheet
        v-model="showShare"
        title="立即分享给好友"
        :options="options"
        @select="onSelect"
      />

      <div class="recommend">更多推荐</div>
      <!-- 更多推荐 -->
      <div class="more" v-for="(item,index) in foodHealthData">
        <div class="leftBox">
          <img :src="item.img" alt="">
        </div>
        <div class="rightBox">
          <div class="titleName">{{item.name}}</div>
          <div class="rate">好评度：{{item.rate}}</div>
          <div class="visited">
            <i class="iconfont icon-yanjing"></i>&nbsp;<span class="count">{{item.count}}</span>
          </div>
        </div>
      </div>
    </div>
  </Move>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import LeftBack from "../../../components/LeftBack/LeftBack";
import Move from "../../../components/Move/Move";
import {  reqFoodHealth } from "../../../mockjs/reqMock"; //引入模拟数据
import { Toast } from 'vant';
export default {
  components: {
    NavBar,
    LeftBack,
    Move,
  },
  created() {
    this.getId();
  },
  computed: {
    // 拿去当前路由id
    id() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      foodHealthData: [],
      // id: "",
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "朋友圈", icon: "wechat-moments" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
    };
  },
  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },

    // 获取当前路由的id,然后去请求对应的数据
    getId() {
      // this.id = this.$route.params.id;
      // console.log(this.id);
      // 拿数据
      reqFoodHealth().then((res) => {
        this.foodHealthData = res.data;
      });
    },
    /* back() {
      this.$router.replace('/vedio');
    }, */
    tag(){
      Toast('点赞成功！')
    },
    noTag(){
      Toast('轻踩一下！')
    },
    collect(){
      Toast('您已收藏！')
    }
  },
};
</script>

<style lang="less" scoped>
.emergency {
  height: 100vh;
  background-color: #ececec;
  .Name {
    color: white;
  }
  .bottomTools {
    width: 96%;
    margin: 3% auto;
    border-radius: 15px;
    height: 50px;
    background-color: white;

    display: flex;
    .tools {
      flex: 1;
      background-color: white;
      border-radius: 15px;
      text-align: center;
      span {
        font-size: 15px;
        color: gray;
      }
      .iconfont {
        font-size: 20px;
        /* margin-top: 5px; */
        line-height: 26px;
        color: gray;
      }
    }
  }
  .recommend{
    width: 96%;
    margin: 3% 2%;
    font-weight: bold;
  }
  .more{
    height: 100px;
    width: 96%;
    margin: 3% 2%;
    background-color: white;
    border-radius: 15px;

    display: flex;
    .leftBox{
      flex: 1;
      background-color: orange;
      border-radius: 15px;
      img{
        height: 100%;
        width: 100%;
        border-radius: 15px;
      }
    }
    .rightBox{
      flex: 2;
      // background-color: pink;
      margin-left: 4%;
      margin-top: 2%;
      position: relative;
      .titleName{
        font-size: 0.8rem;
        color: black;
        font-weight: bold;
      }
      .rate{
        // float: right;
        text-align: right;
        color: orange;
        margin-right: 5%;
        margin-top: 2%;
      }
      .visited{
        position: relative;
        top: 30%;
        .iconfont{
          color: gray;
          font-size: 10px;
        }
        .count{
          font-size: 10px;
        }
      }
    }
  }
}
.topTitle {
  padding-top: 46px;
  width: 98%;
  margin: auto;
  // background-color: yellowgreen;
  .doctorPass {
    height: 23px;
    width: 183px;
    background-color: rgba(229, 229, 229, 0.9);
    border-radius: 12%;
    margin-left: 2%;
    font-size: 14px;
    color: gray;
    margin-top: 2%;
    // padding-top: 2%;
  }
  .title {
    font-size: 20px;
    margin-top: 5%;
    text-align: center;
    margin-left: 5%;
  }
  .author {
    margin-top: 5%;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      // margin-left: 5%;
      // display: inline-block;
    }
    .authorIntro {
      float: left;
      font-size: 15px;
      color: gray;
      // margin-right: 10%;
    }
  }
  .cherryBg {
    img {
      width: 96%;
      height: 200px;
      margin-top: 4%;
      /* margin: 0 auto; */
      border-radius: 15px;
      margin-left: 2%;
    }
  }
}
.description {
  width: 96%;
  /* height: 300px; */
  background-color: white;
  border-radius: 15px;
  letter-spacing: 3px;
  margin: auto;
  margin-top: 3%;
  .words {
    text-align: left;
    width: 95%;
    text-indent: 2em;
    margin: auto;
  }
}
</style>
