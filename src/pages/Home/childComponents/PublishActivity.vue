<template>
  <transition name="move">
    <div class="publishActivity">
      <NavBar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title">发布活动</div>
      </NavBar>
      <van-form @submit="onSubmit" class="form">
        <van-field
          v-model="activity"
          name="activity"
          class="activity"
          label="主题"
          placeholder="请填写活动主题"
          :rules="[{ required: true, message: '请填写活动主题' }]"
        />
        <van-field
          v-model="peopleCount"
          type="nubmber"
          name="peopleCount"
          label="活动人数"
          placeholder="请填写活动人数"
          :rules="[{ required: true, message: '请填写活动人数' }]"
        />

        <!-- <van-field name="rate" label="评分">
          <template #input>
            <van-rate v-model="rate" />
          </template>
        </van-field> -->
        <van-field
          readonly
          clickable
          name="actAddress"
          :value="value"
          label="活动地点"
          placeholder="点击选择城市"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
        <van-field
          v-model="content"
          name="content"
          class="content"
          label="活动内容"
          placeholder="请填写活动内容"
          :rules="[{ required: true, message: '请填写活动内容' }]"
        />
        <!-- <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="value1"
          label="活动内容"
          placeholder="填写活动内容"
          @click="showPicker1 = true"
        />
        <van-popup v-model="showPicker1" position="bottom">
          <van-datetime-picker
            type="time"
            @confirm="onConfirm1"
            @cancel="showPicker1 = false"
          />
        </van-popup> -->
        <van-field
          readonly
          clickable
          name="calendar"
          :value="value2"
          label="活动日期"
          placeholder="点击选择日期"
          @click="showCalendar = true"
        />
        <van-calendar v-model="showCalendar" @confirm="onConfirm2" />
        <van-field name="uploader" label="活动图片上传">
          <template #input>
            <van-uploader v-model="uploader" :after-read="afterRead" accept="image/*" />
          </template>
        </van-field>
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">发布</van-button>
        </div>
      </van-form>
      <textarea name="" id="" cols="30" rows="10">
        {{ this.activityContent }}
      </textarea>
    </div>
  </transition>
</template>

<script>
import LeftBack from "../../../components/LeftBack/LeftBack";
import NavBar from "../../../components/NavBar/NavBar";
import { reqPublishActivity } from "../../../api/home";
import { loadImage } from "../../../api/ajax";
import { Toast } from "vant";

import {mapState} from 'vuex'
export default {
  components: {
    NavBar,
    LeftBack,
  },
  computed:{
    ...mapState(['token'])
  },
  data() {
    return {
      activity: "",
      peopleCount: "",
      uploader: [{ url: "https://img01.yzcdn.cn/vant/leaf.jpg" }],
      fileList: [],
      imgUrl: "",
      uploadFile: "",
      // rate: 3,
      value: "",
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      showPicker: false,
      content: "",
      showPicker1: false,
      value2: "",
      showCalendar: false,
      activityContent: {},
      upImg:''
    };
  },

  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);

      this.upImg = file.content
      console.log(this.upImg)
      const formData = new FormData();
      formData.append("file", file.file);
      // const { res } =  this.$http.post('/addActivity', formData)
      // console.log(formData, "formData");
      // console.log({res})

      reqPublishActivity(this.activity,this.content,this.peopleCount,this.value,this.value2,formData,this.token).then(res=>{
        console.log(res,'res!!!!!!!!!!!!!!!!!!!!')
      })

    },
    onSubmit(values) {
      console.log("submit", values);
      this.activityContent = values;
      Toast("发布成功");
      console.log(this.activityContent);
      // // this.$router.replace('/home/volunteer')

      // axios.post("/addActivity",values).then(res=>{
      //   console.log(res)
      // }).catch(err=>{
      //   console.log(err)
      // })
      // let param = new FormData()
      // param.append('upload',this.uploader)
      // reqPublishActivity(this.activity,this.content,this.peopleCount,this.value,this.value2,this.uploader).then(res=>{
      //   console.log(res)
      // }).catch(err=>{
      //   console.log('failed'+err)
      // })
    },
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onConfirm1(time) {
      this.value1 = time;
      this.showPicker1 = false;
    },
    onConfirm2(date) {
      this.value2 = `${date.getMonth() + 1}/${date.getDate()}`;
      this.showCalendar = false;
    },
    /* publishActivity(){
      reqPublishActivity(this.activity,this.content,this.peopleCount,this.value,this.value2,this.uploader).then(res=>{
        console.log(res.tostring())
      })
    } */
  },
};
</script>

<style lang="less" scoped>
.publishActivity {
  height: 100vh;
  // background-color: yellowgreen;
  z-index: 4;
  .activity {
    padding-top: 60px;
  }
  .advice {
    width: 100%;
    border: none;
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
