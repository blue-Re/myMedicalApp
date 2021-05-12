<template>
  <Move>
    <div id="activityDeatil" slot="Move">
      <NavBar>
        <LeftBack slot="left" @click.native="back()"></LeftBack>
        <div slot="title" class="topTitle">活动详情</div>
        <div slot="right">
          <i class="iconfont icon-fenxiang" @click="showShare = true"></i>
          <van-share-sheet
            v-model="showShare"
            title="选择分享形式"
            :options="options"
            @select="onSelect"
          />
        </div>
      </NavBar>
      <div v-if="i_id_DetailContent.activity">
        <div class="deatil">
          <van-loading size="24px" v-show="isLoading" color="skyblue" class="loading"
            >加载中...</van-loading
          >
          <div class="title">
            <h4>活动主题：{{ i_id_DetailContent.activity.theme }}</h4>
            <div class="timeWrapper">
              <i class="iconfont icon-icon-test"></i>
              <span class="time">{{
                i_id_DetailContent.activity.create_time.slice(0, 19)
              }}</span>
            </div>
          </div>
          <section class="description">
            <div class="words">
              <span style="color: red">活动主要内容：</span
              >{{ i_id_DetailContent.activity.content }}
            </div>
            <!-- <div>活动截止日期：{{ i_id_DetailContent.activity.data }}</div>
            <div>活动组织者：{{ i_id_DetailContent.activity.username }}</div>
            <div>活动地点：{{ i_id_DetailContent.activity.address }}</div>
            <div>活动人数：{{ i_id_DetailContent.activity.peoplenum }}</div> -->
            <img
              :src="img"
              v-for="(img, index) in i_id_DetailContent.pic"
              :key="index"
              alt=""
            />
          </section>
          <van-button
            type="primary"
            block
            round
            class="volunteerApply"
            @click="_joinActivity()"
            ref="volunteer"
            color="green"
            >志愿者申请</van-button
          >
          <div class="tools">
            <div class="tools-items">
              <i
                class="iconfont icon-dianzan"
                @click="tags"
                :class="{ active: isActive }"
              ></i>
              <span class="tagCount" v-model="tagCount">{{ tagCount }}</span>
            </div>
            <div class="tools-items">
              <i class="iconfont icon-tiaocha"></i>
              <span class="commentCount">{{ i_id_DetailContent.comment.length }}</span>
            </div>
            <div class="tools-items" @click="showShare = true">
              <i class="iconfont icon-fenxiang"></i>
              <span class="share">分享</span>
            </div>
          </div>

          <div class="inputComment">
            <input
              type="text"
              placeholder="请输入对应内容"
              class="input"
              v-model="commentContent"
            />
            <button class="button" @click="_comment()">评论</button>
          </div>

          <section class="comment" v-for="(item, index) in reverseComment" :key="item.comment">
            <div class="commentInfo">
              <div class="avator">
                <img :src="item.head_sculpture" alt="" />
              </div>
              <div class="info">
                <span class="name">{{ item.username }}</span>
                <div class="time">{{ item.create_time.slice(0, 19) }}</div>
              </div>
            </div>
            <div class="commentContent">
              <span class="words">{{ item.comment }}</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Move>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import LeftBack from "../../../components/LeftBack/LeftBack";
import Move from "../../../components/Move/Move";

import { Toast } from "vant";
import { mapState } from "vuex";

import { comment, checkAllActivityDetail, joinActivity } from "../../../api/home";
export default {
  name: "ActivityDeatil",
  data() {
    return {
      showShare: false,
      tagCount: 0,
      isActive: false,
      commentContent: '',
      date: "",
      i_id_DetailContent: [],
      i_id: "",
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
      button: "", // 保存组件对象
    };
  },
  computed: {
    ...mapState(["token"]),
    reverseComment() {
      return this.i_id_DetailContent.comment.reverse();
    },
  },
  components: {
    NavBar,
    LeftBack,
    Move,
  },
  
  mounted() {
    this.isLoading = true;
    this.getDetailData();
  },
  methods: {
    back() {
      this.$router.replace("/volunteer");
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    tags() {
      this.isActive = true;
      this.tagCount++;
      Toast(`您点赞了${this.tagCount}次`);
    },
    // 评论+拿内容
    _comment() {
      if (this.commentContent === '') {
        Toast("请填写评论内容");
      } else {
        comment(this.i_id, this.commentContent, this.token).then((res) => {
          console.log(res);
          this.commentContent = "";
          Toast("评论成功");
          location.reload();
        });
      }
    },

    // 参加活动
    _joinActivity() {
      joinActivity(this.token, this.i_id).then((res) => {
        console.log(res);
        console.log(this.$refs.volunteer);
        if (res.code === 1000) {
          console.log(this.$refs.volunteer);
          this.$refs.volunteer.innerText = "已报名";
          this.$refs.volunteer.attributes[2].value =
            "color: white;background: red;border-color: red;";
          Toast(res.msg);
        } else {
          Toast(res.msg + "，您已经是志愿者");
        }
      });
    },

    // 根据不同的id来获取不同的数据
    getDetailData() {
      // 接收到Volunteer传过来的i_id
      this.i_id = this.$route.params.i_id;
      console.log(this.i_id);
      checkAllActivityDetail(this.token, this.i_id).then((res) => {
        this.isLoading = false;
        console.log(res);
        this.i_id_DetailContent = res;
        // if (res.isJoinActivity === 1) {
        //   console.log(this.$refs.volunteer);
        //   this.$refs.volunteer.innerText = "已报名";
        //   this.$refs.volunteer.attributes[2].value =
        //     "color: white;background: red;border-color: red;";
        //   // console.log(this.$refs)
        // }
      });
    },
  },
};
</script>

<style lang="less" scoped>
#activityDeatil {
  height: 100vh;
  background-color: #eaeaea;
  width: 100%;
  overflow: scroll;
  .topTitle{
    color: white;
  }
  .deatil {
    position: relative;
    // border: 1px solid red;
    // margin: 4% 0;
    .van-button--block{
      width: 90%;
    }
    .loading {
      position: fixed;
      top: 7%;
    }
  }
  .title {
    padding-top: 46px;
    height: 9%;
    // background-color: yellow;
    position: relative;

    h4 {
      color: red;
      text-align: center;
    }
    .timeWrapper {
      position: absolute;
      bottom: -22px;
      right: 0%;
      .time {
        font-size: 16px;
      }
    }
  }
  .description {
    margin-top: 3%;
    .words {
      // text-align: center;
      width: 94%;
      font-size: 16px;
      font-weight: bold;
      margin-left: 3%;
      background-color: white;
      letter-spacing: 3px;
      border-radius: 15px;
      text-indent: 2rem;
    }
    img {
      width: 96%;
      height: 95%;
      margin: 2%;
      border-radius: 4%;
    }
  }
  .volunteerApply {
    // margin: 1% 0;
    margin-left: 5%;
  }
  .tools {
    display: flex;
    margin: 2% 0;
    text-align: center;
    // border-bottom: 1px solid rgba(114, 64, 64, 0.6);
    .tools-items {
      flex: 1;
      font-size: 1rem;
      .active {
        color: green;
      }
      .iconfont {
        font-size: 1.5rem;
      }
    }
  }
  .comment {
    padding: 5% 0;
    position: relative;
    /* border: 1px solid gray; */
    border-radius: 4%;
    width: 96%;
    margin-left: 2%;
    margin-top: 1%;
    background-color: white;
    .commentInfo {
      display: flex;
      .avator {
        margin-left: 4%;
        img {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          position: relative;
          top: 17%;
        }
      }
      .info {
        margin-left: 4%;
        font-size: 1rem;
        margin-top: 2%;
        .time {
          font-size: 10px;
          color: rgba(102, 102, 102, 0.5);
        }
      }
    }
    .commentContent {
      // height: 200px;
      margin-left: 21%;
      // background-color: aqua;
      .words {
        font-size: 1rem;
      }
    }
  }
  .inputComment {
    position: relative;
    width: 100%;
    text-align: center;
    height: 40px;
    .input {
      width: 80%;
      height: 30px;
      outline-color: orange;
      border: 1px solid rgb(153, 153, 153);
      border-radius: 5%;
      // padding-top: 3%;
    }
    .button {
      height: 35px;
      text-align: center;
      width: 60px;
      position: relative;
      top: 5%;
      background-color: rgb(67, 207, 124);
      border: none;
      color: white;
      // margin-top: 1%;
      // bottom: 5%;
    }
  }
}
</style>
