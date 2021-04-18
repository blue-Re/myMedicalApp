<template>
  <transition name="move">
    <div id="feedback">
      <NavBar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title">反馈中心</div>
      </NavBar>
      
          <div class="typeTitle">
            <div>请选择反馈问题的类型</div>
          </div>
          <div class="solution">
            <div class="item" @click="show">
              <div class="content">
                <h3>功能异常</h3>
                <span>不能使用现有功能</span>
                <div class="round" v-show="isShow1">
                  <i class="iconfont icon-icon_gou"></i>
                </div>
              </div>
            </div>
            <div class="item" @click="show1">
              <div class="content">
                <h3>其他问题</h3>
                <span>用的不爽、界面卡顿等</span>
                <div class="round" v-show="isShow2">
                  <i class="iconfont icon-icon_gou"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="advice">
            <div>问题和建议</div>
          </div>
          <textarea
            name="description"
            class="description"
            placeholder="请描述您在使用过程中所遇到的问题，若功能异常，上传页面截图能更快的解决！若有其他很好的建议，希望您能够积极反馈给我们！"
          ></textarea>
          <textarea
            name="email"
            cols="100%"
            rows="2"
            style="border: none"
            placeholder="请输入您的邮箱"
          >
          </textarea>
          <div class="addImg">
            <div>添加图片（选填，提供问题的截图）</div>
          </div>
          <div class="commitImg">
            <div class="add">
              <div>
                <i class="iconfont icon-jia1"></i>
              </div>
            </div>
          </div>
          <div class="advice">
          </div>
          <van-button type="primary" block>提交</van-button>
        
      
    </div>
  </transition>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import LeftBack from "../../../components/LeftBack/LeftBack";

import { Toast } from "vant";
export default {
  data() {
    return {
      isShow1: true,
      isShow2: false,
    };
  },
  components: {
    NavBar,
    LeftBack,
  },
  methods: {
    back() {
      this.$router.go(-1);
      Toast("返回成功！");
    },
    show() {
      this.isShow1 = !this.isShow1;
    },
    show1() {
      this.isShow2 = !this.isShow2;
    },
  },
};
</script>

<style lang="less" scoped>
#feedback {
  z-index: 3;
  background-color: #e5e5e5;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  .back {
    color: aqua;
  }
  .typeTitle {
    height: 50px;
    background-color: rgb(229, 229, 229);
    padding-top: 46px;
    div {
      padding-top: 4%;
      padding-left: 4%;
      font-size: 15px;
      // margin: auto 0;
    }
  }
  .solution {
    height: 120px;
    background-color: white;
    display: flex;
    .item {
      flex: 1;
      background-color: white;
      // margin-left: 2%;
      .content {
        margin-left: 6%;
        position: relative;
        .round {
          height: 20px;
          width: 20px;
          background-color: green;
          position: relative;
          left: 80%;
          border-radius: 50%;
          .iconfont {
            display: block;
            font-size: 19px;
            color: white;
          }
        }
        span {
          font-size: 15px;
          color: rgb(120, 120, 120);
        }
      }
    }
  }
  .advice {
    height: 20px;
    background-color: rgb(229, 229, 229);
    div {
      padding-top: 4%;
      margin-left: 4%;
    }
  }
  .description {
    height: 200px;
    width: 100%;
    border: none;
    border-bottom: 4px solid rgb(229, 229, 229);
  }
  .addImg {
    height: 50px;
    background-color: rgb(229, 229, 229);
    div {
      color: rgb(117, 117, 117);
      padding-top: 4%;
      margin-left: 4%;
    }
  }
  .commitImg {
    height: 150px;
    background-color: white;
    position: relative;
    .add {
      width: 100px;
      height: 100px;
      border: 1px solid rgb(117, 117, 117);
      position: relative;
      top: 20px;
      left: 20px;
      div {
        width: 50px;
        height: 50px;
        // background-color: red;
        margin: 25px 25px;
      }
      .iconfont {
        font-size: 50px;
        color: rgb(117, 117, 117);
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
</style>
