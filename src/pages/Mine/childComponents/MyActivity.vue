<template>
  <Move>
    <div id="MyActivity" slot="Move">
      <NavBar>
        <div slot="title">我的活动</div>
        <LeftBack slot="left"></LeftBack>
      </NavBar>
      <van-tabs v-model="active" animated swipeable title-active-color="green" background="#ececec" color="green" class="tabs">
        <van-tab title="我参与的">
          <ul class="activityList">
            <li class="list" v-for="(item,index) in myJoinActivity" :key="index" @click="goTo(`/home/activityDeatil/${myJoinActivity[index].id}`)">
              <div class="leftbox">
                <div class="title">{{item.theme}}</div>
                <div class="words">
                  &nbsp;<i class="iconfont icon-icon-test1"></i>
                  <span>&nbsp;{{item.create_time.slice(0,19)}}</span>
                </div>
                <div class="words">
                  <i class="iconfont icon-zuzhizhe" style="color:red"></i>
                  <span>&nbsp;{{item.username}}</span>
                </div>
              </div>
              <div class="rightbox">
                <img :src="item.pic_address" alt="">
              </div>
            </li>
          </ul>
        </van-tab>

        <van-tab title="我发布的">
          <ul class="activityList">
            <li class="list" v-for="(item,index) in myPublishActivityContent" :key="index" @click="goTo(`/home/activityDeatil/${myPublishActivityContent[index].id}`)">
              <div class="leftbox">
                <div class="title">{{item.theme}}</div>
                <div class="words">
                  <i class="iconfont icon-icon-test1"></i>
                  {{item.create_time.slice(0,19)}}
                </div>
                <div class="words">
                  <i class="iconfont icon-ren"></i>
                  {{item.peoplenum}}
                </div>
                <div class="words">
                  <i class="iconfont icon-zuzhizhe" style="color:red"></i>
                  {{item.username}}
                </div>
              </div>
              <div class="rightbox">
                <img :src="item.pic_address" alt="">
              </div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
      <van-loading size="24px" v-show="isLoading" class="loading">加载中...</van-loading>
    </div>
  </Move>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import LeftBack from "../../../components/LeftBack/LeftBack";
import Move from "../../../components/Move/Move";

import { myPublishActivity,myJoinActivity } from '../../../api/mine';
import { mapState } from 'vuex';

export default {
  created(){

  },
  mounted(){
    this._getData()
  },
  data() {
    return {
      active: 2,
      activityContent:[],
      myPublishActivityContent:[],
      myJoinActivity:[],
      isLoading:true
    };
  },
  components: {
    NavBar,
    LeftBack,
    Move
  },
  computed:{
    ...mapState(['token','i_id'])
  },
  methods: {
    goTo(path){
      this.$router.push(path)
    },
    _getData(){
      myPublishActivity(this.token).then(res=>{
        this.isLoading = false
      console.log(res)
      this.myPublishActivityContent = res.MyActivity
    }),
    myJoinActivity(this.token).then(res=>{
      this.isLoading = false
      console.log(res)
      this.myJoinActivity = res.MyJoinActivity
    })
    }
  },
};
</script>

<style lang="less" scoped>
  #MyActivity{
    height: 100vh;
    width: 100%;
    background-color: #ececec;
    position: relative;
    .tabs{
      padding-top: 46px;
      .activityList{
        .list{
          
          width: 96%;
          background-color: white;
          margin-left: 2%;
          display: flex;
          // margin-top: 2% ;
          margin-bottom: 2%;
          border-radius: 15px;
          // border: 1px solid gray;
          .leftbox{
            flex: 2;
            .title{
              // font-size: 1rem;
              font-weight: bold;
              margin-top: 5%;
              margin-left: 10%;
              text-align: left;
            }
            .words{
              font-size: 15px;
              margin-left: 10%;
              color: rgba(128, 128, 128, 0.904);
              margin-top: 2%;
            }
            
          }
          .rightbox{
            flex: 1;
            img{
              margin: 15% 15%;
              width: 70px;
              height: 70px;
              border-radius: 10%;
            }
          }
        }
      }
    }
  }
</style>