<template>
  <transition name="move">
    <div id="MedicineIdentify">
      <NavBar ref="navbar">
        <LeftBack slot="left"></LeftBack>
        <div slot="title">药品检测</div>
      </NavBar>
      <div class="box">
        <div class="content">
          <div class="add">
            <van-uploader
              v-model="fileList"
              multiple
              :max-count="1"
              :after-read="afterRead"
              preview-size="200px"
              class="uploader"
              ref="file"
            />
          </div>
        </div>
        <div class="start" @click="startCheck">
          <div class="words"><span>开始检测</span></div>
        </div>
      </div>
      <van-loading type="spinner" color="#1989fa" class="loading" v-show="isShow"/>
      <ul class="params" v-show="showList">
        <li class="items">
          <div class="description">
            <span class="leftWords words">GoodsName</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{this.imageData.goodsName}}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">manuAddress</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{this.imageData.manuAddress}}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">manuName</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{this.imageData.manuName}}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">barCode</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{this.imageData.code}}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">trademark</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{this.imageData.trademark}}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">goodsType</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{this.imageData.goodsType}}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">spec</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{this.imageData.spec}}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">trademark</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{this.imageData.trademark}}</span>
          </div>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import LeftBack from "../../../components/LeftBack/LeftBack";
import { Tab, Toast } from "vant";
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      fileList: [
        
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明
      ],
      imageData:{},
      isShow:false,
      showList:false
    };
  },
  computed:{
    ...mapState(['token'])
  },
  components: {
    NavBar,
    LeftBack,
  },
  methods: {
    startCheck() {
      this.isShow = true
      Toast("正在检测，请稍候！！！")
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      // Toast("正在检测，请稍候！！！")
      // this.isShow = true
      const forms = new FormData();
      forms.append('file',file.file);// 获取上传图片信息
        axios.post('http://songidea.free.idcfengye.com/scanBar',forms ,{
          headers:{
            'content-type':'multipart/form-data',
            'token':this.token
          }
        }).then(res=>{
          if(res.data.status===200){
            console.log(res)
            this.imageData = res.data.showapi_res_body
            this.isShow = false
            this.showList = true
            Toast(res.data.showapi_res_body.remark)
          }else{
            Toast(res.data.msg)
            this.isShow = false
          }
        })
    },
  },
};
</script>

<style lang="less" scoped>
#MedicineIdentify {
  z-index: 3;
  height: 100vh;
  // width: 100%;
  // background-color: yellow;
  // overflow:-moz-hidden-unscrollable;
  .van-nav-bar__content {
    background-color: rgb(113, 219, 192);
  }
  .box {
    padding-top: 46px;
    height: 330px;
    width: 100%;
    // background-color: yellowgreen;
    position: relative;
    .content {
      display: flex;
      align-items: center;
      width: 85%;
      height: 200px;
      // background-color: rgb(217, 217, 217);
      margin: 0 auto;
      position: relative;
      top: 25px;
      border-radius: 5%;
      .add {
        // width: 100%;
        // height: 100%;
        // background-color: purple;
        margin: auto;
        .uploader {
          height: 100%;
          width: 100%;
          border: 1px solid gray;
          // margin-left: 13%;
          // background-color: rgb(217, 217, 217);
          // ::v-deep.van-uploader__input{
            
          //   background-color: #bfa;
          //   z-index: 2;
          // }
          ::v-deep.van-uploader__upload{
            margin: 0;
            .van-icon{
              font-size: 50px;
            }
          }
          ::v-deep.van-uploader__preview{
            margin: 0;
          }
        }
      }
    }
    .start {
      width: 60%;
      height: 50px;
      margin: auto;
      position: relative;
      margin-top: 50px;
      border-radius: 5%;
      background-color: rgb(113, 219, 192);
      .words {
        // line-height: 20px;
        text-align: center;
        position: relative;
        span {
          position: relative;
          top: 15px;
          color: white;
        }
      }
    }
  }
  .loading{
    position: relative;
    text-align: center;
  }
  .params {
    height: 180px;
    width: 100%;
    // background-color: purple;
    display: flex;
    flex-direction: column;
    .items {
      // background-color: orange;
      flex: 1;
      border-bottom: 1px solid rgb(195, 195, 195);
      display: flex;
      .description {
        flex: 1;
        // background-color: pink;
        display: flex;
        align-items: center;
        height: 60px;
        .words {
          margin: auto;
        }
        .rightWords {
          color: rgb(166, 166, 166);
        }
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
