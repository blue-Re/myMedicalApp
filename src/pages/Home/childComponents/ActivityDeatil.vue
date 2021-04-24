<template>
  <Move>
    <div id="activityDeatil" slot="Move">
      <NavBar>
        <Left slot="left"></Left>
        <div slot="title">活动详情</div>
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
      <div class="deatil" v-for="(actDeatil,index) in allActivity">
        <div class="title">
          <h4>活动主题：{{ actDeatil.theme }}</h4>
          <div class="timeWrapper">
            <i class="iconfont icon-icon-test"></i>
            <span class="time">{{actDeatil.create_time}}</span>
          </div>
        </div>
        <section class="description">
          <span class="words">
            活动内容：{{actDeatil.content}}
          </span>
          <div>活动编号：{{actDeatil.id}}</div>
          <div>活动组织者：{{actDeatil.username}}</div>
          <div>活动地点：{{actDeatil.address}}</div>
          <div>活动人数：{{actDeatil.peoplenum}}</div>
          <img src="../img/mm.png" alt="" />
          <span class="words">
            本次比较试验围绕消费者关注的产品安全和补水保湿功能，一是对《化妆品安全技术规范》中所列41种糖皮质激素进行了检测筛查；二是按照《化妆品安全技术规范》对防腐剂的要求，对样品的标签标示进行了核查；三是依据行业标准QB/T
            4256-2011《化妆品保湿功效评价指南》的要求，征集200志愿者，对40款面膜商品的1小时、2小时、4小时保湿功效分别进行了测试。
          </span>
          <img src="../img/mm2.jpg" alt="" />
          <span class="words">
            经过严格考核筛选，2011年9月，20名“315志愿者”正式“上岗”。志愿者中年龄最大的65岁，年龄最小的31岁，有职业律师、村（社区）干部、农业专家、教师、个体户等，他们发挥各自优势，在不同岗位、不同领域为消费维权贡献力量。沙洋县农业局高级农艺师金以龙借下乡培训农业生产技术之际，教农民识别假冒伪劣农资；五里铺镇严店村村干部罗天金在村委会制作消费维权宣传栏，提高村民消费维权意识；毛李中学退休教师张仁坤利用擅长交流沟通的职业长处，多次促使消费者和经营者握手言和……
          </span>
        </section>
        <van-button type="primary" block round class="volunteerApply"
          >志愿者申请</van-button
        >
      </div>
      <div class="tools">
        <div class="tools-items">
          <i
            class="iconfont icon-dianzan"
            @click="tags"
            :class="{ active: isActive }"
          ></i>
          <span class="tagCount">{{ tagCount }}</span>
        </div>
        <div class="tools-items">
          <i class="iconfont icon-tiaocha"></i>
          <span class="commentCount">{{ commentCount }}</span>
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
        <button class="button" @click="_comment">评论</button>
      </div>

      <section class="comment">
        <div class="commentInfo">
          <div class="avator">
            <img src="../img/1.jpg" alt="" />
          </div>
          <div class="info">
            <span class="name">海洋里的虾米</span>
            <div class="time">2019-07-19 11:35:00</div>
          </div>
        </div>
        <div class="commentContent">
          <span class="words">这个面膜让我感觉神清气爽，我的肌肤感觉到非常的丝滑</span>
        </div>
      </section>
      <section class="comment">
        <div class="commentInfo">
          <div class="avator">
            <img src="../img/1.jpg" alt="" />
          </div>
          <div class="info">
            <span class="name">海洋里的虾米</span>
            <div class="time">2019-07-19 11:35:00</div>
          </div>
        </div>
        <div class="commentContent">
          <span class="words">这个面膜让我感觉神清气爽，我的肌肤感觉到非常的丝滑</span>
        </div>
      </section>
    </div>
  </Move>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import Left from "../../../components/LeftBack/LeftBack";
import Move from "../../../components/Move/Move";

import { Toast } from "vant";
import { mapState } from "vuex";

import { comment } from "../../../api/home";
export default {
  data() {
    return {
      showShare: false,
      tagCount: 0,
      commentCount: 0,
      isActive: false,
      commentContent: [],
      a_id: 111,
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
  computed: {
    ...mapState(["token", "allActivity"]),
  },
  components: {
    NavBar,
    Left,
    Move,
  },
  created() {
    this.$store.dispatch("getAllActivity");
  },
  methods: {
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    tags() {
      this.isActive = true;
      this.tagCount++;
      Toast(`您点赞了${this.tagCount}次`);
    },
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
#activityDeatil {
  height: 100vh;
  // background-color: #bfa;
  width: 100%;
  overflow: scroll;
  .title {
    padding-top: 46px;
    height: 9%;
    // background-color: yellow;
    position: relative;

    h4 {
      text-align: center;
    }
    .timeWrapper {
      position: absolute;
      bottom: -22px;
      right: 0%;
      .time {
        font-size: 12%;
      }
    }
  }
  .description {
    margin-top: 3%;
    .words {
      font-size: 1rem;
    }
    img {
      width: 100%;
      height: 100%;
      margin: 2% 0;
    }
  }
  .volunteerApply {
    margin: 1% 0;
  }
  .tools {
    display: flex;
    text-align: center;
    border-bottom: 1px solid rgba(114, 64, 64, 0.6);
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
    // height: 300px;
    // background-color: yellow;
    margin: 5% 0;
    position: relative;
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
          font-size: 1rem;
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
    .input {
      width: 80%;
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
      // position: relative;
      // left: 103%;
      // top: 18%;
      background-color: rgb(67, 207, 124);
      border: none;
      color: white;
      bottom: 5%;
    }
  }
}
</style>
