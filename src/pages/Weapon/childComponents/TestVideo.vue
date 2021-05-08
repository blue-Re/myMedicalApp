<template>
  <div id="Video">
    <div class="video">
      <video-player
      class="video- player vjs-custom-skin player"
      ref="videoPlayer"
      name="videoPlayer"
      id="video"
      :playsinline="true"
      :options="playerOptions"
    >
    </video-player>
    </div>
    
    <div class="keyInfo">
      <ul class="infoList">
        <li class="list1">
          <img
            :src='videoData[index].authorImg'
            alt=""
          />
          <div class="little">
            <span class="author">{{ videoData[index].author }}</span>
            <span class="attention" @click="change" ref="change">· 关注</span><br />
            <div class="introduce">行内知名讲师</div>
          </div>
        </li>
        <li class="list2">
          <div class="mark">
            <i class="iconfont icon-pinglun"></i>
            <i class="iconfont icon-fenxiang" @click="showShare = true"></i>
            <van-share-sheet
              v-model="showShare"
              title="立即分享给好友"
              :options="options"
            />
          </div>
        </li>
      </ul>
    </div>
    <div class="top">
      
    </div>
    <!-- <video-player
      class="video- player vjs-custom-skin"
      ref="videoPlayer"
      name="videoPlayer"
      id="video"
      :playsinline="true"
      :globalOptions="globalSetting"
      :options="playerOptions"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @statechanged="playerStateChanged($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"
      @ready="playerReadied"
    >
    </video-player> -->
  </div>
</template>

<script>
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
import { Toast } from 'vant';
export default {
  components: {
    videoPlayer,
  },
  props: {
    videoData: {
      type: Array,
      default: "",
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      playTime: "",
      current: "",
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], //可选的播放速度
        autoplay: false, //1如果为true,浏览器准备好时开始回放。
        muted: false, //默认情况下将会消除任何音频。
        loop: false, //是否视频一结束就重新开始。
        preload: "auto", //建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为，立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", //将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔两个数字（例如“16：9”）
        fluid: true, //当true时 ，Video.js player将 拥有流体大小。换句话说，它将按比例缩放以适应其容器
        sources: [
          {
            // type: "video/mp4", //类型
            type: this.videoData[this.index].type, //类型
            src: this.videoData[this.index].url,
            // "https://songidea.oss-cn-beijing.aliyuncs.com/medical/Video/Home-Video/06A57CAC9579F7B47B6BAA8A0FBB697E.mp4", // ur1地址
          },
        ],
        poster: this.videoData[this.index].posterUrl,
        // "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%3A%2F%2Fugcv.ws.netease.com%2Fsnapshot%2F20170506%2FxYTkE7782_1.jpg%26thumbnail%3D750x2147483647%26quality%3D75%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1620712884&t=732883e578daace847b06be1f9268fad", //封面地址
        // "https://songidea.oss-cn-beijing.aliyuncs.com/medical/Video/Home-Video/06A57CAC9579F7B47B6BAA8A0FBB697E.png", //封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video. js无法播放媒体源时显示的默认信息
        controlBar: {
          timeDivider: true, //当前时间和持续时间的分隔符
          durationDisplay: true, //显示持续时间
          remainingTimeDisplay: false, //是否显示剩余时间功能
          fullscreenToggle: true, //是否显示全屏按钮
        },
      },
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
    change() {
      this.$refs.change.innerHTML = "已关注";
      console.log(this.$refs.change.innerHTML);
      Toast('关注成功！')
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
  },
  /* methods: {
    // 播放回调
    onPlayerPlay(player) {
      console.log("player play!", player);
    },
    // 暂停回调
    onPlayerPause(player) {
      console.log("player pause!", player);
    },
    // 视频播完回调
    onPlayerEnded($event) {
      console.log(player);
    },
    // Dom元素上的readyState更改导致播放停止
    onPlayerWaiting(player) {
      let time = localStorage.getItem("cacheTime");
      if (player.cache_.currentTime - Number(time) > 2) {
        this.current = Number(time);
        this.playerReadied(player);
      } else {
        this.current = player.cache_.currentTime;
      }
    },
    // 已开始播放回调
    onPlayerPlaying($event) {
      //console . log(player)
    },
    //当播放器在当前播放位置下载数据时触发
    onPlayerLoadeddata($event) {
      // console. log(player)
    },
    //当前播放位置发生变化时触发。
    onPlayerTimeupdate(player) {
      this.playTime = player.cache_.currentTime;
      let playTime = player.cache_.currentTime;
      setTimeout(function () {
        localStorage.setItem("cacheTime", playTime);
      }, 500);
      let time = localStorage.getItem(" cacheTime");
      if (player.cache_.currentTime - Number(time) > 100) {
        this.current = Number(time);
        this.playerReadied(player);
      } else {
        this.current = player.cache_.currentTime;
      }
    },
    //媒体的readyState为HAVE_ FUTURE_ DATA或更高
    onPlayerCanplay(player) {
      // console.1og( ' player Canplay!', player)
    },
    //媒体的readyState为HAVE ENOUGH_ DATA或更高。这意味着可以在不缓冲的情况下播放整个媒体文件。
    onPlayerCanplaythrough(player) {
      console.log("player Canplaythrough!", player);
    },
    //播放状态改变回调
    playerStateChanged(playerCurrentState) {
      // console. log( ' player current update state', playerCurrentState)
    },
    //将侦听器绑定到组件的就绪状态。与事件监听器的不同之处在于，如果ready事 件已经发生，它将立即触发
    playerReadied(player) {
      // console. log( ' example player 1 readied', player);
      player.currentTime(this.current);
    },
  }, */
};
</script>

<style lang="less" scoped>
.vjs-custom-skin > .video-js .vjs-big-play-button {
  background-color: rgba(0, 0, 0, 0.45);
  font-size: 3em;
  /* border-radius: 50%; */
  height: 1.5em !important;
  line-height: 1.5em !important;
  margin-top: -1em !important;
}
/*这里用了第三方vue -video player插件， 但这个插件有bug,设置globalSetting: {controls : true }隐藏进度条 不
. vjs- progress -control {
/*
visibility :hidden;//隐藏进度条
}
*/
#Video {
  width: 100%;
  // height: 100vh;
  background-color: #ececec;
  .player {
    width: 96%;
    margin-left: 2%;
  }
  .keyInfo {
    height: 50px;
    position: relative;
    .infoList {
      height: 100%;
      display: flex;
      .list1 {
        flex: 2;
        .little {
          margin-top: 3%;
        }
        img {
          float: left;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          margin-left: 4%;
          margin-top: 2%;
        }
        .author {
          // text-align: right;
          float: left;
          font-size: 10px;
          font-weight: bold;
          margin-left: 2%;
        }
        .attention {
          margin-left: 2%;
          float: left;
          font-size: 13px;
          font-weight: bold;
          color: red;
        }
        .introduce {
          float: left;
          font-size: 10px;
          color: gray;
          margin-left: 2%;
        }
      }
      .list2 {
        flex: 1;
        .mark {
          margin-top: 10%;
          .iconfont {
            font-size: 1.33em;
            margin-left: 25%;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
