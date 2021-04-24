<template>
  <Move>
    <div class="mysetting" slot="Move">
      <NavBar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title">编辑资料</div>
      </NavBar>
      <ul class="infoWrapper">
        <li class="list">
          <span class="item">头像</span>
          <span class="item"><img src="../img/1.jpg" alt="" style="width: 50px" /></span>
        </li>
        <van-cell-group>
          <van-field
            label="昵称"
            ref="name"
            v-model="name"
            disabled
            input-align="right"
            @blur.prevent="confirm()"
          />
          <van-field
            label="电话"
            ref="phone"
            v-model="phone"
            disabled
            input-align="right"
            @blur.prevent="confirm()"
          />
          <van-field
            label="性别"
            ref="sex"
            v-model="sex"
            disabled
            input-align="right"
            @blur.prevent="confirm()"
          />
          <van-field
            label="常住地"
            ref="address"
            v-model="address"
            disabled
            input-align="right"
            @blur.prevent="confirm()"
          />
          <van-field
            label="学校"
            ref="school"
            v-model="school"
            disabled
            input-align="right"
            @blur.prevent="confirm()"
          />
        </van-cell-group>
      </ul>
      <div class="commit">
        <div class="buttons">
          <van-button round type="info" class="button" @click.prevent="confirm()"
            >编辑资料</van-button
          >
          <van-button
            round
            type="info"
            class="button"
            color="red"
            ref="defiChange"
            @click="confireChange"
            >确定修改</van-button
          >
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
export default {
  data() {
    return {
      name: "吃瓜",
      phone: "19935453194",
      sex: "男",
      address: "山西太谷",
      school: "皇家大信院",
    };
  },
  components: {
    NavBar,
    LeftBack,
    Move,
  },
  methods: {
    confirm() {
      console.log("我点击了修改按钮");
      this.$refs.name.disabled = false;
      this.$refs.phone.disabled = false;
      this.$refs.sex.disabled = false;
      this.$refs.address.disabled = false;
      this.$refs.school.disabled = false;
    },
    confireChange() {
      // console.log("111");
      Toast("修改成功");
      // this.$refs.name.value = this.name;
      // this.$refs.phone.value = this.phone;
      // this.$refs.sex.value = this.sex;
      // this.$refs.address.value = this.address;
      // this.$refs.school.value = this.school;
    },
  },
};
</script>

<style lang="less" scoped>
.mysetting {
  height: 100vh;
  overflow: hidden;
  // background-color: yellow;
  z-index: 3;
  .infoWrapper {
    width: 95%;
    background-color: white;
    margin: 0 auto;

    .list {
      flex: 1;
      margin-top: 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      padding-top: 10px;
    }
  }
  .commit {
    width: 95%;
    .buttons {
      text-align: center;
      margin-top: 15px;
      // margin-left: 10px;
      .button {
        margin-left: 20px;
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
