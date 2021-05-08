<template>
  <Move>
    <div id="illness" slot="Move">
      <NavBar>
        <LeftBack slot="left"></LeftBack>
        <div slot="title">智能疾病查询</div>
      </NavBar>
      <div class="blank"></div>
      <div class="search">
        <input type="text" placeholder="请输入常见疾病" v-model="diseaseKeyWords" />
        <i class="iconfont icon-sousu" @click="getIllnessData"></i>
      </div>
      <div class="img">
        <img src="../img/illnessCheck.jpg" alt="" />
      </div>
      <ul
        class="params"
        v-if="illList.length !== 0"
        v-for="(item, index) in illList"
        :key="index"
      >
        <li class="items">
          <div class="description">
            <span class="leftWords words">疾病名称</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_NAME }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">疾病别名</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_BYNAME }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">疾病详情</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_DETAIL }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">是否医保</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_INSURED }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">发病部位</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_SITE }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">传染性</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_INFECTIOUNESS }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">多发人群</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_MUTIPLE }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">相关症状</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_SYMPTOMS }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">并发疾病</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_CONCURRENT }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">就诊科室</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_CLINIC_DEPARTMENT }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">治疗费用</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_COST }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">治愈率</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_CURE_RATE }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">治疗周期</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_CYCLE }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">治疗方法</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_CURE_JETH0OD }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">相关检查</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_RELEVANT_INSPECTION }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">相关手术</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_RELEVANT_SURGERY }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">常用药品</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_DRUG }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">最佳就诊时间</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_0PTIMAL_TIME }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">就诊前的准备</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_PREPARATION }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">传播途径</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_ROUTE }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">传染病种类别</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_INFECT_TYPE }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">潜伏期</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_LATENTPERI0D }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">潜伏期表现</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_LATENCY_PERF0RMANCE }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">是否会遗传</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_INHERIT }}</span>
          </div>
        </li>
        <li class="items">
          <div class="description">
            <span class="leftWords words">遗传方式</span>
          </div>
          <div class="description">
            <span class="rightWords words">{{ item.DISEASE_LATENTPERI0D }}</span>
          </div>
        </li>
      </ul>
    </div>
  </Move>
</template>

<script>
import NavBar from "../../../components/NavBar/NavBar";
import LeftBack from "../../../components/LeftBack/LeftBack";
import Move from "../../../components/Move/Move";

import { diseaseSearch } from "../../../api/home";
import { Toast } from "vant";
export default {
  data() {
    return {
      illList: [],
      saveData: [],
      diseaseKeyWords: "",
    };
  },
  components: {
    NavBar,
    LeftBack,
    Move,
  },
  methods: {
    getIllnessData() {
      if (this.diseaseKeyWords === "") {
        Toast("请输入疾病后查询！");
      } else {
        console.log("我要拿数据");
        Toast("正在查询相关疾病，请稍等！！！");
        diseaseSearch(this.diseaseKeyWords).then((res) => {
          console.log(res);
          this.illList = res.DISEASE_INFO;
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
#illness {
  // height: 100vh;
  background-color: #ececec;
  width: 100%;
  .blank {
    padding-top: 70px;
  }
  .search {
    position: relative;
    text-align: center;
    input {
      height: 40px;
      border: 1px solid rgb(3, 190, 141);
      width: 90%;
    }
    .iconfont {
      position: absolute;
      font-size: 1.5rem;
      right: 8%;
      top: 18%;
      color: green;
    }
  }
  .img {
    padding-top: 5%;
    width: 100%;
    text-align: center;
    img {
      height: 100%;
      width: 96%;
      border-radius: 15px;
    }
  }
  .params {
    // height: 180px;
    width: 96%;
    margin: 0 auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    // border: 1px solid red;
    border-radius: 15px;
    margin-top: 5%;
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
        font-weight: bold;
        // height: 60px;
        .words {
          margin: auto;
          // color: black;
        }
        .rightWords {
          color: rgb(166, 166, 166);
          // color: black;
        }
      }
    }
  }
}
</style>
