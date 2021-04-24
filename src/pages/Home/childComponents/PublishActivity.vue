<template>
  <Move>
    <div class="publishActivity" slot="Move">
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
        <van-field
          readonly
          clickable
          name="calendar"
          :value="value2"
          label="活动截止日期"
          placeholder="点击选择日期"
          @click="showCalendar = true"
        />
        <van-calendar v-model="showCalendar" @confirm="onConfirm2" />
        <van-field name="uploader" label="活动图片上传">
          <template #input>
            <van-uploader v-model="fileList" :after-read="afterRead" />
          </template>
        </van-field>
        <van-loading type="spinner" color="#1989fa" class="loading" v-show="isLoading" />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">发布</van-button>
        </div>
      </van-form>
    </div>
  </Move>
</template>

<script>
import LeftBack from "../../../components/LeftBack/LeftBack";
import NavBar from "../../../components/NavBar/NavBar";
import Move from '../../../components/Move/Move'
import { reqPublishActivity } from "../../../api/home";
import { Toast } from "vant";
import axios from "axios";

import { mapState } from "vuex";

export default {
  components: {
    NavBar,
    LeftBack,
    Move
  },
  computed: {
    ...mapState(["token"]),
  },
  data() {
    return {
      activity: "", //活动主题
      peopleCount: "", //活动人数
      uploader: [],
      fileList: [],
      imgUrl: [],
      // rate: 3,
      value: "", //活动地点
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"],
      showPicker: false,
      content: "", //活动内容
      showPicker1: false,
      value2: "", //活动日期
      showCalendar: false,
      isLoading: false,
    };
  },

  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      const forms = new FormData();
      forms.append("file", file.file); // 获取上传图片信息
      axios
        .post("http://songidea.cn.utools.club/addActivity_Pic_Url", forms, {
          headers: {
            "content-type": "multipart/form-data",
            token: this.token,
          },
        })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.imgUrl.push(res.data.PIC_URL);
          }
        });
    },
    // 将数据提交给后台
    onSubmit() {
      this.isLoading = true;
      setTimeout(() => {
        // 将图片传给后端
        reqPublishActivity(
          this.activity,
          this.content,
          this.peopleCount,
          this.value,
          this.value2,
          this.imgUrl,
          this.token
        ).then((res) => {
          if(res.code === 1000){
            Toast(res.msg)
            this.isLoading = false
            console.log(res)
          }else{
            Toast(res.msg)
            this.isLoading = false
            console.log(res)
          }
        });
      }, 2000);
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
  .loading {
    text-align: center;
  }
}

</style>
