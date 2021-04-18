<template>

  <div id="activityDeatil">
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
    <div class="title">
      <h4>面膜比较实验购样（澳门实体店）</h4>
      <div class="timeWrapper">
        <i class="iconfont icon-icon-test"></i>
        <span class="time">2021-03-01</span>
      </div>
    </div>
    <section class="description">
      <span class="words">
        据悉，本次比较试验通过大型商场、品牌专卖店、网络电商平台及直销零售商等渠道购买了40款面膜(其中线下实体店27款，线上电商平台13款)，涵盖了自然堂、百雀羚、一叶子等大众品牌，兰蔻、SK-II等高端品牌，以及LEADERS(丽得姿)、utena(佑天兰)、papa
        recipe（春雨）等日韩网红品牌，面贴膜和涂抹式面膜各20款，面贴膜价格在17.7元至740元之间，涂抹式面膜价格在26.62元至1350元之间
      </span>
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
    <van-button type="primary" block round class="volunteerApply">志愿者申请</van-button>

    <div class="tools">
      <div class="tools-items">
        <i class="iconfont icon-dianzan" @click="tags" :class="{ active: isActive }"></i>
        <span class="tagCount">{{ tagCount }}</span>
      </div>
      <div class="tools-items">
        <i class="iconfont icon-tiaocha"></i>
        <span class="commentCount">{{ commentCount }}</span>
      </div>
      <div class="tools-items" @click="showShare = true">
        <i class="iconfont icon-fenxiang"></i>
        <span class="share" >分享</span>
      </div>
    </div>

    <div class="inputComment">
      
    </div>

    <section class="comment">
      <div class="commentInfo">
        <div class="avator">
          <img src="../img/1.jpg" alt="" >
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
          <img src="../img/1.jpg" alt="" >
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
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import Left from "../../../components/LeftBack/LeftBack";

import { Toast } from "vant";
export default {
  data() {
    return {
      showShare: false,
      tagCount: 0,
      commentCount: 0,
      isActive: false,
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
  components: {
    NavBar,
    Left,
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
      bottom: 0;
      right: 5%;
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
    border-bottom: 1px solid rgba(114, 64, 64, 0.6) ;
    .tools-items {
      flex: 1;
      font-size: 1rem;
      .active {
        color: green;
      }
      .iconfont{
        font-size: 1.5rem;
      }
    }
  }
  .comment{
    // height: 300px;
    // background-color: yellow;
    margin: 5% 0 ;
    position: relative;
    .commentInfo{
      display: flex;
      .avator{
        margin-left: 4%;
        img{
          height: 50px;
          width: 50px;
          border-radius: 50%;
          position: relative;
          top: 17%;
        }
      }
      .info{
        margin-left: 4%;
        font-size: 1rem;
        margin-top: 2%;
        .time{
          font-size: 1rem;
          color: rgba(102,102,102,.5);
        }
      }
    }
    .commentContent{
      // height: 200px;
      margin-left: 21%;
      // background-color: aqua;
      .words{
        font-size: 1rem;
      }
    }
  }
}
</style>
